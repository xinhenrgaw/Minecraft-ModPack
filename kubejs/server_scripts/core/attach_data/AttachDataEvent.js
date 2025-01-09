/**
 * @typedef IPersistentData
 * @property {() => Internal.CompoundTag} getPersistentData
 */

/**
 * @class
 * 
 * @param {IPersistentData} object 
 */
function AttachDataEvent(object) {
  /**
   * @type {IAttachData[]}
   */
  this.datas = [];
  this.object = object;
}

/**
 * 
 * @param {} data 
 */
AttachDataEvent.prototype.addAttachData = function (data) {
  this.datas.push(data);
}

