/**
 * 工具、盔甲配方修改
 */

// 删除工具配方
ServerEvents.recipes(event => {
  const Traits = ["iron", "golden", "diamond", "netherite"];
  const Tools = ["axe", "hoe", "pickaxe", "shovel", "sword"];
  const BiFuncId = (traits, tool) => `minecraft:${traits}_${tool}`;

  Traits.forEach(trait => {
    Tools.forEach(tool => {
      event.remove({ id: BiFuncId(trait, tool) });
    })
  })

  const recipes = [
    "minecraft:shield"
  ];
  recipes.forEach(recipe => event.remove({ id: recipe }));
})

// 删除盔甲配方
ServerEvents.recipes(event => {
  const Traits = ["leather", "chainmail", "iron", "golden", "diamond", "netherite"];
  const ArmorTypes = ["helmet", "chestplate", "leggings", "boots"];
  const BiFuncId = (traits, tool) => `minecraft:${traits}_${tool}`;

  Traits.forEach(trait => {
    ArmorTypes.forEach(armorType => {
      event.remove({ id: BiFuncId(trait, armorType) });
    })
  })
})

/**
 * 工具配方替换
 */
ServerEvents.recipes(event => {
  // // 盾 -> 旅行者盾牌 
  // event.replaceOutput(
  //   { id: "minecraft:shield" },
  //   "*",
  //   Item.of('tconstruct:plate_shield', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:wood","tconstruct:iron"],tic_modifiers:[{level:1,name:"tconstruct:cultivated"},{level:1,name:"tconstruct:projectile_protection"},{level:1,name:"tconstruct:blocking"}],tic_persistent:{},tic_stats:{"tconstruct:block_amount":100.0f,"tconstruct:block_angle":180.0f,"tconstruct:durability":270.0f},tic_volatile_data:{defense:3,upgrades:2}}')
  // );
  // 弩 -> 木弩
  event.replaceOutput(
    { "id": "minecraft:crossbow" },
    "*",
    Item.of('tconstruct:crossbow', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:wood","tconstruct:wood","tconstruct:string"],tic_modifiers:[{level:2,name:"tconstruct:cultivated"},{level:1,name:"tconstruct:stringy"}],tic_multipliers:{"tconstruct:durability":2.0f},tic_persistent:{},tic_stats:{"tconstruct:durability":120.0f},tic_volatile_data:{abilities:1,upgrades:3}}')
  );
  // 木斧 -> 木短柄斧
  event.replaceOutput(
    { id: "minecraft:wooden_axe" },
    "*",
    Item.of('tconstruct:hand_axe', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:wood","tconstruct:wood","tconstruct:wood"],tic_modifiers:[{level:3,name:"tconstruct:cultivated"},{level:1,name:"tconstruct:stripping"}],tic_persistent:{},tic_stats:{"tconstruct:attack_damage":6.0f,"tconstruct:attack_speed":0.9f,"tconstruct:durability":60.0f,"tconstruct:mining_speed":2.0f},tic_volatile_data:{abilities:1,upgrades:3}}')
  );
  // 木镐 -> 木镐
  event.replaceOutput(
    { id: "minecraft:wooden_pickaxe" },
    "*",
    Item.of('tconstruct:pickaxe', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:wood","tconstruct:wood","tconstruct:wood"],tic_modifiers:[{level:3,name:"tconstruct:cultivated"},{level:1,name:"tconstruct:pierce"}],tic_persistent:{},tic_stats:{"tconstruct:attack_damage":1.0f,"tconstruct:attack_speed":1.2f,"tconstruct:durability":60.0f,"tconstruct:mining_speed":2.0f},tic_volatile_data:{abilities:1,upgrades:3}}')
  );
  // 木镰 -> 短刃镰
  event.replaceOutput(
    { id: "minecraft:wooden_hoe" },
    "*",
    Item.of('tconstruct:kama', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:wood","tconstruct:wood","tconstruct:ancient_hide"],tic_modifiers:[{level:2,name:"tconstruct:cultivated"},{level:1,name:"tconstruct:fortune"},{level:1,name:"tconstruct:tilling"},{level:1,name:"tconstruct:shears"},{level:1,name:"tconstruct:harvest"}],tic_multipliers:{"tconstruct:attack_damage":0.5f},tic_persistent:{},tic_stats:{"tconstruct:attack_damage":0.5f,"tconstruct:attack_speed":1.6f,"tconstruct:durability":60.0f,"tconstruct:mining_speed":2.0f},tic_volatile_data:{abilities:1,upgrades:3}}')
  );
  // 木锹 -> 凿石锹
  event.replaceOutput(
    { id: "minecraft:wooden_shovel" },
    "*",
    Item.of('tconstruct:pickadze', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:wood","tconstruct:wood","tconstruct:wood"],tic_modifiers:[{level:3,name:"tconstruct:cultivated"},{level:1,name:"tconstruct:pathing"}],tic_multipliers:{"tconstruct:attack_damage":1.15f,"tconstruct:durability":1.3f,"tconstruct:mining_speed":0.75f},tic_persistent:{},tic_stats:{"tconstruct:attack_damage":0.575f,"tconstruct:attack_speed":1.3f,"tconstruct:durability":78.0f,"tconstruct:mining_speed":1.5f},tic_volatile_data:{abilities:1,upgrades:3}}')
  );
  // 木剑 -> 木剑 
  event.replaceOutput(
    { id: "minecraft:wooden_sword" },
    "*",
    Item.of('tconstruct:sword', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:wood","tconstruct:wood","tconstruct:wood"],tic_modifiers:[{level:3,name:"tconstruct:cultivated"},{level:1,name:"tconstruct:silky_shears"}],tic_multipliers:{"tconstruct:durability":1.1f,"tconstruct:mining_speed":0.5f},tic_persistent:{},tic_stats:{"tconstruct:attack_damage":3.0f,"tconstruct:attack_speed":1.6f,"tconstruct:durability":66.0f},tic_volatile_data:{abilities:1,upgrades:3}}')
  );
  // 石斧 -> 石短柄斧
  event.replaceOutput(
    { id: "quark:tweaks/crafting/utility/tools/stone_axe" },
    "*",
    Item.of('tconstruct:hand_axe', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:rock","tconstruct:wood","tconstruct:wood"],tic_modifiers:[{level:1,name:"tconstruct:stonebound"},{level:2,name:"tconstruct:cultivated"},{level:1,name:"tconstruct:stripping"}],tic_persistent:{},tic_stats:{"tconstruct:attack_damage":7.0f,"tconstruct:attack_speed":0.9f,"tconstruct:durability":130.0f,"tconstruct:harvest_tier":"minecraft:stone","tconstruct:mining_speed":4.0f},tic_volatile_data:{abilities:1,upgrades:3}}')
  );
  // 石镐 -> 石镐
  event.replaceOutput(
    { id: "quark:tweaks/crafting/utility/tools/stone_pickaxe" },
    "*",
    Item.of('tconstruct:pickaxe', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:rock","tconstruct:wood","tconstruct:wood"],tic_modifiers:[{level:1,name:"tconstruct:stonebound"},{level:2,name:"tconstruct:cultivated"},{level:1,name:"tconstruct:pierce"}],tic_persistent:{},tic_stats:{"tconstruct:attack_damage":2.0f,"tconstruct:attack_speed":1.2f,"tconstruct:durability":130.0f,"tconstruct:harvest_tier":"minecraft:stone","tconstruct:mining_speed":4.0f},tic_volatile_data:{abilities:1,upgrades:3}}')
  );
  // 石镰 -> 石短刃镰
  event.replaceOutput(
    { id: "quark:tweaks/crafting/utility/tools/stone_hoe" },
    "*",
    Item.of('tconstruct:kama', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:rock","tconstruct:wood","tconstruct:wood"],tic_modifiers:[{level:1,name:"tconstruct:stonebound"},{level:2,name:"tconstruct:cultivated"},{level:1,name:"tconstruct:tilling"},{level:1,name:"tconstruct:shears"},{level:1,name:"tconstruct:harvest"}],tic_multipliers:{"tconstruct:attack_damage":0.5f},tic_persistent:{},tic_stats:{"tconstruct:attack_damage":1.0f,"tconstruct:attack_speed":1.6f,"tconstruct:durability":130.0f,"tconstruct:harvest_tier":"minecraft:stone","tconstruct:mining_speed":4.0f},tic_volatile_data:{abilities:1,upgrades:3}}')
  );
  // 石锹 -> 石凿石锹
  event.replaceOutput(
    { id: "quark:tweaks/crafting/utility/tools/stone_shovel" },
    "*",
    Item.of('tconstruct:pickadze', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:rock","tconstruct:wood","tconstruct:wood"],tic_modifiers:[{level:1,name:"tconstruct:stonebound"},{level:2,name:"tconstruct:cultivated"},{level:1,name:"tconstruct:pathing"}],tic_multipliers:{"tconstruct:attack_damage":1.15f,"tconstruct:durability":1.3f,"tconstruct:mining_speed":0.75f},tic_persistent:{},tic_stats:{"tconstruct:attack_damage":1.15f,"tconstruct:attack_speed":1.3f,"tconstruct:durability":123.49999f,"tconstruct:harvest_tier":"minecraft:stone","tconstruct:mining_speed":2.25f},tic_volatile_data:{abilities:1,upgrades:3}}')
  );
  // 石剑 -> 石剑 
  event.replaceOutput(
    { id: "quark:tweaks/crafting/utility/tools/stone_sword" },
    "*",
    Item.of('tconstruct:sword', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:rock","tconstruct:wood","tconstruct:wood"],tic_modifiers:[{level:1,name:"tconstruct:stonebound"},{level:2,name:"tconstruct:cultivated"},{level:1,name:"tconstruct:silky_shears"}],tic_multipliers:{"tconstruct:durability":1.1f,"tconstruct:mining_speed":0.5f},tic_persistent:{},tic_stats:{"tconstruct:attack_damage":4.0f,"tconstruct:attack_speed":1.6f,"tconstruct:durability":143.0f,"tconstruct:harvest_tier":"minecraft:stone","tconstruct:mining_speed":2.0f},tic_volatile_data:{abilities:1,upgrades:3}}')
  );

})

