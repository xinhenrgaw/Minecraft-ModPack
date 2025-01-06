/**
 * 工具、盔甲战利品表修改
 */
LootJS.modifiers(event => {
  event
    .addLootTypeModifier(LootType.CHEST)
    // 铁斧 -> 短柄斧
    .modifyLoot(Ingredient.of("minecraft:iron_axe"), itemStack => {
      return Item.of('tconstruct:hand_axe', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:iron","tconstruct:wood","tconstruct:wood"],tic_modifiers:[{level:1,name:"tconstruct:magnetic"},{level:2,name:"tconstruct:cultivated"},{level:1,name:"tconstruct:stripping"}],tic_persistent:{},tic_stats:{"tconstruct:attack_damage":8.0f,"tconstruct:attack_speed":0.9f,"tconstruct:durability":250.0f,"tconstruct:harvest_tier":"minecraft:iron","tconstruct:mining_speed":6.0f},tic_volatile_data:{abilities:1,upgrades:3}}');
    })
    // 铁剑 -> 剑
    .modifyLoot(Ingredient.of("minecraft:iron_sword"), itemStack => {
      return Item.of('tconstruct:sword', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:iron","tconstruct:wood","tconstruct:wood"],tic_modifiers:[{level:1,name:"tconstruct:magnetic"},{level:2,name:"tconstruct:cultivated"},{level:1,name:"tconstruct:silky_shears"}],tic_multipliers:{"tconstruct:durability":1.1f,"tconstruct:mining_speed":0.5f},tic_persistent:{},tic_stats:{"tconstruct:attack_damage":5.0f,"tconstruct:attack_speed":1.6f,"tconstruct:durability":275.0f,"tconstruct:harvest_tier":"minecraft:iron","tconstruct:mining_speed":3.0f},tic_volatile_data:{abilities:1,upgrades:3}}');
    })
    // 铁镐 -> 铁镐
    .modifyLoot(Ingredient.of("minecraft:iron_pickaxe"), itemStack => {
      return Item.of('tconstruct:pickaxe', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:iron","tconstruct:wood","tconstruct:wood"],tic_modifiers:[{level:1,name:"tconstruct:magnetic"},{level:2,name:"tconstruct:cultivated"},{level:1,name:"tconstruct:pierce"}],tic_persistent:{},tic_stats:{"tconstruct:attack_damage":3.0f,"tconstruct:attack_speed":1.2f,"tconstruct:durability":250.0f,"tconstruct:harvest_tier":"minecraft:iron","tconstruct:mining_speed":6.0f},tic_volatile_data:{abilities:1,upgrades:3}}');
    })
    // 铁锄 -> 短刃锄
    .modifyLoot(Ingredient.of("minecraft:iron_hoe"), itemStack => {
      return Item.of('tconstruct:kama', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:iron","tconstruct:wood","tconstruct:wood"],tic_modifiers:[{level:1,name:"tconstruct:magnetic"},{level:2,name:"tconstruct:cultivated"},{level:1,name:"tconstruct:tilling"},{level:1,name:"tconstruct:shears"},{level:1,name:"tconstruct:harvest"}],tic_multipliers:{"tconstruct:attack_damage":0.5f},tic_persistent:{},tic_stats:{"tconstruct:attack_damage":1.5f,"tconstruct:attack_speed":1.6f,"tconstruct:durability":250.0f,"tconstruct:harvest_tier":"minecraft:iron","tconstruct:mining_speed":6.0f},tic_volatile_data:{abilities:1,upgrades:3}}');
    })
    // 铁锹 -> 凿石锹
    .modifyLoot(Ingredient.of("minecraft:iron_shovel"), itemStack => {
      return Item.of('tconstruct:pickadze', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:iron","tconstruct:wood","tconstruct:wood"],tic_modifiers:[{level:1,name:"tconstruct:magnetic"},{level:2,name:"tconstruct:cultivated"},{level:1,name:"tconstruct:pathing"}],tic_multipliers:{"tconstruct:attack_damage":1.15f,"tconstruct:durability":1.3f,"tconstruct:mining_speed":0.75f},tic_persistent:{},tic_stats:{"tconstruct:attack_damage":1.7249999f,"tconstruct:attack_speed":1.3f,"tconstruct:durability":201.5f,"tconstruct:harvest_tier":"minecraft:iron","tconstruct:mining_speed":3.0f},tic_volatile_data:{abilities:1,upgrades:3}}');
    })
    // 弓 -> 木长弓
    .modifyLoot(Ingredient.of("minecraft:bow"), itemStack => {
      return Item.of('tconstruct:longbow', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:wood","tconstruct:wood","tconstruct:wood","tconstruct:string"],tic_modifiers:[{level:3,name:"tconstruct:cultivated"},{level:1,name:"tconstruct:stringy"}],tic_multipliers:{"tconstruct:durability":1.5f},tic_persistent:{},tic_stats:{"tconstruct:durability":360.0f},tic_volatile_data:{abilities:1,upgrades:2}}');
    })
    // 弩 -> 木弩
    .modifyLoot(Ingredient.of("minecraft:crossbow"), itemStack => {
      return Item.of('tconstruct:crossbow', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:wood","tconstruct:wood","tconstruct:string"],tic_modifiers:[{level:2,name:"tconstruct:cultivated"},{level:1,name:"tconstruct:stringy"}],tic_multipliers:{"tconstruct:durability":2.0f},tic_persistent:{},tic_stats:{"tconstruct:durability":120.0f},tic_volatile_data:{abilities:1,upgrades:3}}');
    })
    // 铁头盔 -> 镶板铁头盔
    .modifyLoot(Ingredient.of("minecraft:iron_helmet"), itemStack => {
      return Item.of('tconstruct:plate_helmet', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:iron","tconstruct:iron"],tic_modifiers:[{level:2,name:"tconstruct:projectile_protection"}],tic_persistent:{},tic_stats:{"tconstruct:armor":2.0f,"tconstruct:durability":165.0f},tic_volatile_data:{defense:3,upgrades:2}}');
    })
    // 铁胸甲 -> 镶板铁胸甲
    .modifyLoot(Ingredient.of("minecraft:iron_chestplate"), itemStack => {
      return Item.of('tconstruct:plate_chestplate', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:iron","tconstruct:iron"],tic_modifiers:[{level:2,name:"tconstruct:projectile_protection"}],tic_multipliers:{"tconstruct:attack_damage":0.4f},tic_persistent:{},tic_stats:{"tconstruct:armor":5.0f,"tconstruct:durability":240.0f},tic_volatile_data:{defense:3,upgrades:2}}');
    })
    // 铁护腿 -> 镶板铁护腿 
    .modifyLoot(Ingredient.of("minecraft:iron_leggings"), itemStack => {
      return Item.of('tconstruct:plate_leggings', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:iron","tconstruct:iron"],tic_modifiers:[{level:2,name:"tconstruct:projectile_protection"}],tic_persistent:{},tic_stats:{"tconstruct:armor":4.0f,"tconstruct:durability":225.0f},tic_volatile_data:{defense:3,upgrades:2}}');
    })
    // 铁护靴 -> 镶板铁护靴
    .modifyLoot(Ingredient.of("minecraft:iron_boots"), itemStack => {
      return Item.of('tconstruct:plate_boots', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:iron","tconstruct:iron"],tic_modifiers:[{level:2,name:"tconstruct:projectile_protection"}],tic_persistent:{},tic_stats:{"tconstruct:armor":2.0f,"tconstruct:durability":195.0f},tic_volatile_data:{defense:3,upgrades:2}}');
    })
    // 金头盔 -> 镶板铁头盔
    .modifyLoot(Ingredient.of("minecraft:golden_helmet"), itemStack => {
      return Item.of('tconstruct:plate_helmet', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:gold","tconstruct:gold"],tic_modifiers:[{level:2,name:"tconstruct:golden"},{level:2,name:"tconstruct:magic_protection"}],tic_persistent:{},tic_stats:{"tconstruct:armor":1.0f,"tconstruct:durability":77.0f},tic_volatile_data:{defense:3,"tconstruct:piglin_neutral":1b,upgrades:2}}');
    })
    // 金胸甲 -> 镶板铁胸甲
    .modifyLoot(Ingredient.of("minecraft:golden_chestplate"), itemStack => {
      return Item.of('tconstruct:plate_chestplate', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:gold","tconstruct:gold"],tic_modifiers:[{level:2,name:"tconstruct:golden"},{level:2,name:"tconstruct:magic_protection"}],tic_multipliers:{"tconstruct:attack_damage":0.4f},tic_persistent:{},tic_stats:{"tconstruct:armor":4.0f,"tconstruct:durability":112.0f},tic_volatile_data:{defense:3,"tconstruct:piglin_neutral":1b,upgrades:2}}');
    })
    // 金护腿 -> 镶板铁护腿 
    .modifyLoot(Ingredient.of("minecraft:golden_leggings"), itemStack => {
      return Item.of('tconstruct:plate_leggings', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:gold","tconstruct:gold"],tic_modifiers:[{level:2,name:"tconstruct:golden"},{level:2,name:"tconstruct:magic_protection"}],tic_persistent:{},tic_stats:{"tconstruct:armor":3.0f,"tconstruct:durability":105.0f},tic_volatile_data:{defense:3,"tconstruct:piglin_neutral":1b,upgrades:2}}');
    })
    // 金护靴 -> 镶板铁护靴
    .modifyLoot(Ingredient.of("minecraft:golden_boots"), itemStack => {
      return Item.of('tconstruct:plate_boots', '{Damage:0,tic_broken:0b,tic_materials:["tconstruct:gold","tconstruct:gold"],tic_modifiers:[{level:2,name:"tconstruct:golden"},{level:2,name:"tconstruct:magic_protection"}],tic_persistent:{},tic_stats:{"tconstruct:armor":1.0f,"tconstruct:durability":91.0f},tic_volatile_data:{defense:3,"tconstruct:piglin_neutral":1b,upgrades:2}}');
    })
    // 锁链头盔 -> air
    .modifyLoot(Ingredient.of("minecraft:chainmail_helmet"), itemStack => {
      return Item.of("air");
    })
    // 锁链胸甲 -> air
    .modifyLoot(Ingredient.of("minecraft:chainmail_chestplate"), itemStack => {
      return Item.of("air");
    })
    // 锁链护腿 -> air
    .modifyLoot(Ingredient.of("minecraft:chainmail_leggings"), itemStack => {
      return Item.of("air");
    })
    // 锁链护靴 -> air
    .modifyLoot(Ingredient.of("minecraft:chainmail_boots"), itemStack => {
      return Item.of("air");
    })
})