/**
 * @class
 */
function Factions() {
  
}

/**
 * @private
 */
Factions.REGISTRY = Utils.newMap();

/**
 * 
 * @param {ResourceLocation} name 
 * @param {Faction} faction 
 * @returns {Faction}
 */
Factions.register = function (name, faction) {
  this.REGISTRY.put(name, faction);
  return faction;
}

Factions.NONE = Factions.register(new ResourceLocation("modpack", "none"), new Faction());