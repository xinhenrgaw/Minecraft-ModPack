/**
 * @class
 * 
 * @param {number} id 
 * @param {BlockPos} center 
 * @param {Faction} faction 
 */
function Raid(level, id, center, faction) {
  /**
   * @type {Internal.ServerLevel}
   */
  this.level = level
  this.id = id;
  this.center = center;
  this.started = false;
  this.stoped = false;
  this.win = false;
  this.lose = false;
  /**
   * 总波次
   * @type {number}
   */
  this.totalWaves = 0;
  /**
   * 当前波次
   * @type {number} 波次
   */
  this.wave = 0;
  /**
   * 每个波次的生物
   * @type {Internal.HashMap<number, WeightTable<Special.EntityType>>}
   */
  this.waves = Utils.newMap();
  /**
   * @private
   * @type {Internal.List<Internal.Entity>}
   */
  this.aliveRaiders = Utils.newList();
  /**
   * 强度
   * @type {number}
   */
  this.strength = 0;
  /**
   * 冷却时间
   * @type {number}
   */
  this.cooldown = 300;
}

/**
 * 
 * @returns {BlockPos}
 */
Raid.prototype.getCenter = function () {
  return this.center;
}
/**
 * 
 * @returns {number}
 */
Raid.prototype.getId = function () {
  return this.id;
}

/**
 * 
 * @returns {Internal.List<Internal.Entity>>}
 */
Raid.prototype.getAliveRaiders = function () {
  return this.aliveRaiders;
}

/**
 * 
 * @returns {number}
 */
Raid.prototype.getNumberOfAliveRaiders = function () {
  return this.aliveRaiders.length;
}

/**
 * 
 * @returns {Internal.ServerLevel}
 */
Raid.prototype.getLevel = function () {
  return this.level;
}

/**
 * 是否已结束
 * @returns {boolean}
 */
Raid.prototype.isStoped = function () {
  return this.stoped;
}

/**
 * 是否已结束(分出胜负)
 * @returns {boolean}
 */
Raid.prototype.isOver = function () {
  return this.isVictory() || this.isDefeated();
}

/**
 * 是否已开始
 * @returns {boolean}
 */
Raid.prototype.isStart = function () {
  return this.started;
}

/**
 * 是否胜利
 * @returns {boolean}
 */
Raid.prototype.isVictory = function () {
  return this.win;
}

/**
 * 是否失败
 * @returns {boolean}
 */
Raid.prototype.isDefeated = function () {
  return this.win || this.lose;
}

/**
 * 停止Raid 这会使RaidManager在下一刻删除此Raid
 */
Raid.prototype.stop = function () {
  this.stoped = true;
}

/**
 * 胜利
 */
Raid.prototype.victor = function () {
  this.win = true;
}

/**
 * 失败
 */
Raid.prototype.defeated = function () {
  this.lose = true;
}

/**
 * 开始Raid
 */
Raid.prototype.start = function () {
  let difficulty = this.getLevel().getDifficulty();
  if (difficulty == Difficulty.EASY) {
    this.strength += 20;
  }
  else if (difficulty == Difficulty.NORMAL) {
    this.strength += 40;
  }
  else if (difficulty == Difficulty.HARD) {
    this.strength += 80;
  }
  else {
    // 如果难度是和平 Stop
    this.stop();
  }
  
}

/**
 * Tick
 */
Raid.prototype.tick = function () {
  // 如果没有结束则正常运行
  if (!this.isOver()) {
    
  }
  // 如果结束 消耗冷却时间 冷却时间归零时设置停止
  else {
    if (this.cooldown > 0) {
      this.cooldown--;
    } else {
      this.stop();
    }
  }
}
