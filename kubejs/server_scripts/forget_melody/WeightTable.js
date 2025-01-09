/**
 * @template T
 * @param {number} weight 
 * @param {T} object 
 */
function WeightEntry(weight, object) {
  /**
   * @private
   * @type {number}
   */
  this.weight = weight;
  /**
   * @private
   * @type {T}
   */
  this.object = object;
}

/**
 * 获取权重
 * @returns {number}
 */
WeightEntry.prototype.getWeight = function () {
  return this.weight;
}

/**
 * 获取对象
 * @returns {T}
 */
WeightEntry.prototype.getObject = function () {
  return this.object;
}

/**
 * @template T
 * @class
 * 
 * @param {Internal.List<WeightEntry<T>>} weightEntries 
 */
function WeightTable(weightEntries) {
  /**
   * @private
   * @type {Internal.List<WeightEntry<T>>}
   */
  this.weightEntries = weightEntries;
}

/**
 * 
 * @returns {number}
 */
WeightTable.prototype.getTotalWeight = function () {
  let totalWeight = 0;
  this.weightEntries.forEach(entry => totalWeight += entry.getWeight());
  return totalWeight;
}

/**
 * 
 * @returns {T}
 */
WeightTable.prototype.get = function () {
  let randomWeight = Utils.getRandom().nextInt(this.getTotalWeight());
  let currentWeight = 0;
  for (const weightEntry of this.weightEntries) {
    let weight = weightEntry.getWeight();
    currentWeight += weight;
    if (randomWeight <= currentWeight) {
      return weightEntry.getObject();
    }
  }
}

/**
 * @template T
 * @class
 */
function WeightTableBuilder() {
  this.weightEntries = Utils.newList();
}

/**
 * 添加权重项
 * @param {WeightEntry<T>} entry 
 * @returns {WeightTableBuilder<T>}
 */
WeightTableBuilder.prototype.addEntry = function (entry) {
  this.weightEntries.add(entry);
  return this;
}

/**
 * 构建权重表
 * @returns {WeightTable<T>}
 */
WeightTableBuilder.prototype.build = function () {
  return new WeightTable(this.weightEntries);
}