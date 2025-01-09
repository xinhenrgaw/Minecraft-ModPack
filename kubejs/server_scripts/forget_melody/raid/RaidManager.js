/**
 * Raid范围²: 12544
 */
const RaidManager = {
  raidMaxDistanceSqr: 12544,
  /**
   * @type {Internal.HashMap<Number, Raid>}
   */
  raids: Utils.newMap(),
  /**
   * @returns {Raid[]}
   */
  getRaids: function () {
    return this.raids.values().toArray();
  },
  /**
   * 获取该位置的袭击
   * @param {BlockPos} pos 
   * @returns {Raid?}
   */
  getRaidAtPos: function (pos) {
    return this.getRaids().filter(raid => raid.getCenter().distSqr(pos) <= this.raidMaxDistanceSqr)[0];
  },
  /**
   * 在该位置创建袭击
   * @param {BlockPos} pos 
   * @returns {Raid}
   */
  createRaid: function (pos, faction) {
    let raid = this.getRaidAtPos(pos);
    if (!raid) {
      let index = this.getRaids().length;
      raid = new Raid(pos, faction);
      this.raids.put(index, raid);
    }
    return raid;
  },
  /**
   * 删除袭击
   * @param {Raid} raid 
   */
  removeRaid: function (raid) {
    this.raids.remove(raid.getId());
  },
  /**
   * 每tick调用
   */
  tick: function () {
    let raids = this.getRaids();
    if (raids.length == 0) return;

    raids.forEach(raid => {
      if(raid.isStoped()){
        this.removeRaid(raid);
      } else {
        raid.tick();
      }
    })
  }
}