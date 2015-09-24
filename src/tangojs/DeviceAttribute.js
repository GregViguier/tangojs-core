
/**
 * Proxy for accessing device attribute.
 */
export class DeviceAttribute {

  /**
   * Creates new DeviceAttribute.
   * @param {DeviceProxy}  deviceProxy    device proxy instance
   * @param {string}       attributeName  attribute name
   */
  constructor(deviceProxy, attributeName) {
    /** @private */
    this.deviceProxy = deviceProxy
    /** @private */
    this.attributeName = attributeName
  }

  /**
   * Reads attribute value.
   * @return {Promise<AttributeValue,Error>} result
   */
  readValue() {
    return this.deviceProxy.readAttributeValue(this.attributeName)
  }

  /**
   * Writes attribute value.
   * Returns promise of stored value (if sync is true)
   * or undefined (if sync is false).
   * @param {any}      value         value to write
   * @param {boolean}  [sync=false]  synchronous / asynchronous call
   * @return {Promise<AttributeValue,Error>|undefined} stored value or undefined
   */
  writeValue(value, sync = false) {
    return this.deviceProxy
      .writeAttributeValue(this.attributeName, value, sync)
  }

  /**
   * Reads attribute info.
   * @return {Promise<AttributeInfo,Error>} result
   */
  readInfo() {
    return this.deviceProxy.readAttributeInfo(this.attributeName)
  }
}
