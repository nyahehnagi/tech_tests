class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.map((item) => this.#processItem(item))
    return this.items;
  }

  #processItem(item){
    const name = this.#formatName(item.name)

    switch (name) {
      case "Sulfuras, Hand of Ragnaros":
        break;
      case "Aged Brie":
        this.#processAgedBrie(item);
        break;
      case "Backstage passes to a TAFKAL80ETC concert":
        this.#processBackStagePass(item);
        break;
      case "Conjured":
        this.#processConjuredItem(item);
        break;
      default:
        this.#processNormalItem(item);
    }
  }

  #formatName(name){
    return this.#isConjured(name) ? "Conjured" : name
  }

  #isConjured(name){
    return name.includes("Conjured")
  }

  #processConjuredItem(item) {
    this.#updateQuality(item, -2);
    this.#reduceSellin(item);
  }

  #processAgedBrie(item) {
    this.#updateQuality(item, 1);
    this.#reduceSellin(item);
  }

  #processBackStagePass(item) {
    if (item.sellIn < 6) {
      this.#updateQuality(item, 3);
    } else if (item.sellIn < 11) {
      this.#updateQuality(item, 2);
    } else {
      this.#updateQuality(item, 1);
    }

    this.#reduceSellin(item);

    if (item.sellIn < 0) {
      this.#updateQuality(item, -item.quality);
    }
  }

  #processNormalItem(item) {
    this.#updateQuality(item, -1);
    this.#reduceSellin(item);

    if (item.sellIn < 0) {
      this.#updateQuality(item, -1);
    }
  }

  #reduceSellin(item) {
    item.sellIn --
  }

  #updateQuality(item, amount) {
    item.quality = item.quality + amount;
    if (item.quality <= 0) item.quality = 0;
    if (item.quality >= 50) item.quality = 50;
  }
}

module.exports = {
  Item,
  Shop,
};
