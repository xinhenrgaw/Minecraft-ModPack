JEIEvents.information(event => {
  event.addItem(Item.of("tconstruct:ichor_slime_crystal_cluster"), [
    Component.gold("灵浆水晶簇")
      .append(Component.black("是一种可再生的从灵浆水晶母岩上生长出的一种矿物，类似于"))
      .append(Component.darkPurple("紫水晶"))
      .append(Component.black("，常见于灵浆水晶洞中。")),
    Component.darkGray("小型晶芽/中型晶芽/大型晶芽/水晶簇分别会发出11/12/14/15级光照。")
  ]);
})

JEIEvents.information(event => {
  event.addItem(Item.of("tconstruct:earth_slime_crystal_cluster"), [
    Component.darkGreen("大地粘液水晶簇")
      .append(Component.black("是一种可再生的从大地粘液水晶母岩上生长出的 一种矿物，类似于"))
      .append(Component.darkPurple("紫水晶"))
      .append(Component.black("，常见于大地粘液水晶洞中。")),
    Component.darkGray("小型晶芽/中型晶芽/大型晶芽/水晶簇分别会发出11/12/14/15级光照。")
  ]);
})

JEIEvents.information(event => {
  event.addItem(Item.of("tconstruct:sky_slime_crystal_cluster"), [
    Component.darkAqua("碧空粘液水晶簇")
      .append(Component.black("是一种可再生的从碧空粘液水晶母岩上生长出的 一种矿物，类似于"))
      .append(Component.darkPurple("紫水晶"))
      .append(Component.black("，常见于碧空粘液水晶洞中。")),
    Component.darkGray("小型晶芽/中型晶芽/大型晶芽/水晶簇分别会发出11/12/14/15级光照。")
  ]);
})