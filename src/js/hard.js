class GildedRose {
  constructor (sellIn, quality, name) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  tick () {
    if (this.name == 'Aged Brie') {
      this.agedBrie()
    } else if (this.name == 'Sulfuras, Hand of Ragnaros') {
      this.sulfuras()
    } else if (this.name == 'Conjured Mana Cake') {
      this.conjured()
    } else if (this.name == 'Backstage passes to a TAFKAL80ETC concert') {
      this.backStage()
    } else{
      this.normal()
    }
  }

  agedBrie () {
    this.sellIn--;
    if (this.sellIn >= 0) {
      this.quality = this.quality + 1;
    } else if (this.sellIn < 0){
      this.quality = this.quality + 2;
    }
    if (this.quality > 50) {
      this.quality = 50;
    }
  }

  sulfuras () {
    if (this.sellIn >= 0) {
      this.quality = 80;
    } else if (this.sellIn < 0) {
      this.quality = 80;
    }
  }

  conjured () {
    this.sellIn--;
    if (this.sellIn >= 0) {
      this.quality = this.quality - 2;
    } else if (this.sellIn < 0){
      this.quality = this.quality - 4;
    }
    if (this.quality < 0) {
      this.quality = 0;
    }
  }

  backStage () {
    this.sellIn--;
    if (this.sellIn >= 10) {
      this.quality = this.quality + 1;
      this.sellIn = this.sellIn;
    } else if (this.sellIn >= 5){
      this.quality = this.quality + 2;
    } else if (this.sellIn >= 0){
      this.quality = this.quality + 3;
    } else {
      this.quality = 0;
    }
    if (this.quality > 50) {
      this.quality = 50;
    }
  }

  normal () {
    if (this.quality === 0) {
      this.quality = this.quality + 1;
    }
    this.sellIn--;
    this.quality--;
    if (this.sellIn < 0) {
       this.quality = this.quality - 1;
    }
  }

};

export { GildedRose };
