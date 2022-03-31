class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {

      if (this.items[i].name == 'Sulfuras, Hand of Ragnaros'){
        // do nothing
      }
      else if (this.items[i].name == 'Aged Brie'){
        this.#updateQuality(this.items[i], 1)
        this.#reduceSellin(this.items[i], 1)
      }
      else if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert'){

          this.#updateQuality(this.items[i], 1)

          if (this.items[i].sellIn < 11) {
            if (this.items[i].quality < 50) {
              this.#updateQuality(this.items[i], 1)
            }
          }
          if (this.items[i].sellIn < 6) {
            if (this.items[i].quality < 50) {
              this.#updateQuality(this.items[i], 1)
            }
          } 
        
        this.#reduceSellin(this.items[i], 1)

        if (this.items[i].sellIn < 0){
          this.#updateQuality(this.items[i], -this.items[i].quality)
        }

      }
      else {
        this.#updateQuality(this.items[i], -1)
        this.#reduceSellin(this.items[i], 1)

        if (this.items[i].sellIn < 0) {
          this.#updateQuality(this.items[i], -1)   
        }
      }
    }

    return this.items;
  }

  #reduceSellin(item, amount){
    item.sellIn = item.sellIn - amount;
  }

  #updateQuality(item, amount){
    if (item.quality + amount >= 0 && item.quality + amount <= 50){
      item.quality = item.quality + amount;
    }
  }
  

}

module.exports = {
  Item,
  Shop
}
