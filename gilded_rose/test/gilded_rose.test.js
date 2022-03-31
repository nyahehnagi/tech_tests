const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("the hand of sulfuras never changes in quality", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -1, 80)]);
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(80);
    expect(items[0].sellIn).toBe(-1);
  })

  it("a normal item decreases in quality and sellin 1 per day", () => {
    const gildedRose = new Shop([new Item("Normal Item", 10, 50)]);
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(49);
    expect(items[0].sellIn).toBe(9);
  })

  it("a normal item decreases in quality twice as fast once sellin time has passed", () => {
    const gildedRose = new Shop([new Item("Normal Item", 0, 50)]);
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(48);
    expect(items[0].sellIn).toBe(-1);
  })

  it("Aged Brie increases in quality", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 0)]);
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(1);
    expect(items[0].sellIn).toBe(1);
  })

  it("Back stage passes increase in quality by 1 if sellin > 10", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 10)]);
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(11);
    expect(items[0].sellIn).toBe(10);
  })

  it("Back stage passes increase in quality by 2 if sellin <= 10", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10)]);
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(12);
    expect(items[0].sellIn).toBe(9);
  })

  it("Back stage passes increase in quality by 3 if sellin <= 5", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10)]);
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(13);
    expect(items[0].sellIn).toBe(4);
  })


  it("Back stage passes increase in quality by 3 if sellin <= 5", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)]);
    const items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(-1);
  })

});