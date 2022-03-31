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
console.log ("Brie FOUND")
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1
          }
          this.#reduceSellin(this.items[i], 1)
       }
      else{


        if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.items[i].quality > 0) {
              this.items[i].quality = this.items[i].quality - 1;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
            if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
              if (this.items[i].sellIn < 11) {
                if (this.items[i].quality < 50) {
                  this.items[i].quality = this.items[i].quality + 1;
                }
              }
              if (this.items[i].sellIn < 6) {
                if (this.items[i].quality < 50) {
                  this.items[i].quality = this.items[i].quality + 1;
                }
              }
            }
          }
        }

        this.#reduceSellin(this.items[i], 1)

        if (this.items[i].sellIn < 0) {
          if (this.items[i].name != 'Aged Brie') {
            if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
              if (this.items[i].quality > 0) {
                this.items[i].quality = this.items[i].quality - 1;
              }
            } else {
              this.items[i].quality = this.items[i].quality - this.items[i].quality;
            }
          } 
        }
      }
    }

    return this.items;
  }

  #reduceSellin(item, amount){
    item.sellIn = item.sellIn - amount;
  }


}

module.exports = {
  Item,
  Shop
}
