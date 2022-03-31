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
    for (let i = 0; i < this.items.length; i++) {

      const name = this.#isConjured(this.items[i].name) ? "Conjured" : this.items[i].name
      console.log(name)

      switch (name) {
        case "Sulfuras, Hand of Ragnaros":
          break;
        case "Aged Brie":
          this.#processAgedBrie(this.items[i]);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          this.#processBackStagePass(this.items[i]);
          break;
        case "Conjured":
          this.#processConjuredItem(this.items[i]);
          break;
        default:
          this.#processNormalItem(this.items[i]);
      }
    }

    return this.items;
  }

  #isConjured(name){
    return name.includes("Conjured")
  }

  #processConjuredItem(item) {
    this.#updateQuality(item, -2);
    this.#reduceSellin(item, 1);
  }

  #processAgedBrie(item) {
    this.#updateQuality(item, 1);
    this.#reduceSellin(item, 1);
  }

  #processBackStagePass(item) {
    if (item.sellIn < 6) {
      this.#updateQuality(item, 3);
    } else if (item.sellIn < 11) {
      this.#updateQuality(item, 2);
    } else {
      this.#updateQuality(item, 1);
    }

    this.#reduceSellin(item, 1);

    if (item.sellIn < 0) {
      this.#updateQuality(item, -item.quality);
    }
  }

  #processNormalItem(item) {
    this.#updateQuality(item, -1);
    this.#reduceSellin(item, 1);

    if (item.sellIn < 0) {
      this.#updateQuality(item, -1);
    }
  }

  #reduceSellin(item, amount) {
    item.sellIn = item.sellIn - amount;
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
