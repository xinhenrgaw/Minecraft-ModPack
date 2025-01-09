/**
 * @class
 * 
 * @param {Internal.Entity} entity 
 */
function Raider(entity) {
  this.entity = entity;
  /**
   * 所属的Raid
   * @type {Raid}
   */
  this.raid;
}