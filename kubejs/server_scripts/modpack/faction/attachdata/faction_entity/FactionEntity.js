/**
 * @class
 * @implements {INBTSerializable}
 */
function FactionEntity() {
  this.faction = Factions.NONE;
}

/**
 * @returns {Internal.Tag}
 */
FactionEntity.prototype.serializeNBT = function () {
  let nbt = new CompoundTag();
}

/**
 * @param {Internal.Tag} nbt
 */
FactionEntity.prototype.deserializeNBT = function (nbt) {
  
}

