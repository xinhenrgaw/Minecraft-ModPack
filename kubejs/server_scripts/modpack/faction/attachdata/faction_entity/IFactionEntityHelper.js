/**
 * @typedef IFactionEntityHelper
 * @property {() => Internal.HashMap<Internal.LivingEntity, FactionEntity>} getFactionEntitys
 */

/**
 * @class
 */
function IFactionEntityHelper() { };

/**
 * @returns {IFactionEntityHelper}
 */
IFactionEntityHelper.getHelper = function () {
  FactionEntityHandler.INSTANCE;
}

