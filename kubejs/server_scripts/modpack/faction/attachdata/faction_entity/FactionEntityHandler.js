/**
 * @class
 * @implements {IFactionEntityHelper}
 */
function FactionEntityHandler() { }

/**
 * 初始化
 */
FactionEntityHandler.prototype.init = function () {
  global["FactionEntitys"] = Utils.newMap();
}

/**
 * 获取FactionEntity的缓存
 * @returns {Internal.HashMap<Internal.LivingEntity, FactionEntity>}
 */
FactionEntityHandler.prototype.getFactionEntitys = function () {
  return global["FactionEntitys"];
}

/**
 * 从数据加载
 * @param {Internal.CompoundTag} nbt 
 * @returns {FactionEntity}
 */
FactionEntityHandler.prototype.load = function (nbt) {

}

/**
 * 保存为数据
 * @returns {Internal.CompoundTag}
 */
FactionEntityHandler.prototype.save = function () {

}

FactionEntityHandler.INSTANCE = new FactionEntityHandler();

