## Feedback to take forward 

- The code is quite readable and naming is clear — though it's common to prefer if spanning over more than one line (even if the "body" contains only one instruction) to improve readability:
if (item.quality <= MIN_QUALITY) {
  item.quality = MIN_QUALITY;
}
- Ideally, there should be one file for each class — two in your case
- You've written a lot of methods to encapsulate low-level logic, which is good. However the Shop class is a bit packed — can you think of ways to extract some logic of it? For example, for a conjured item, you could think of a class ConjuredItemUpdater, or something similar, that would be responsible to specifically update conjured items, and would contain the related logic. That's one way of splitting the class into smaller ones, but you could think of other ones too
- Quite a lot of test cases with good coverage, that's good
- To mock the Item class in the tests, instead of referencing directly the Item class when creating a new item, you can use a JS "object literal", where you literally define its properties and functions — e.g to create a "double" object of the item Aged Brie, you can write:
const mockAgedBrieItem = { name: 'Aged Brie', quality: 50, sellIn: 1 }



## Gilded Rose

An epic shop which is based in Azeroth. It shows the items for sale on a daily basis showing how their quality degrades over time.

This is a challenge focused on refactoring and testing. 

## Installation

---

Install node via your favourite package manager if required, see [here](https://nodejs.org/en/ "Node") for more details

Install jest if not already

```
$> npm install --save-dev jest
```

To install this code from the latest source

```
$> git clone git@github.com:nyahehnagi/tech_tests.git

```

navigate to the gilded_rose directory

```
$> cd gilded_rose
```

## Testing

---

To run jest tests

```
$> npx jest
```
## Running in Node
----
to run the texttest_fixture in node

`node ./test/texttest_fixture.js`

if you wish to add more days simply add the number of days on the end of the command e.g `node ./test/texttest_fixture.js 3`


The default call for 2 days will show the following

~~~~
-------- day 0 --------
name, sellIn, quality
+5 Dexterity Vest, 10, 20
Aged Brie, 2, 0
Elixir of the Mongoose, 5, 7
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, 15, 20
Backstage passes to a TAFKAL80ETC concert, 10, 49
Backstage passes to a TAFKAL80ETC concert, 5, 49
Conjured Mana Cake, 3, 6

-------- day 1 --------
name, sellIn, quality
+5 Dexterity Vest, 9, 19
Aged Brie, 1, 1
Elixir of the Mongoose, 4, 6
Sulfuras, Hand of Ragnaros, 0, 80
Sulfuras, Hand of Ragnaros, -1, 80
Backstage passes to a TAFKAL80ETC concert, 14, 21
Backstage passes to a TAFKAL80ETC concert, 9, 50
Backstage passes to a TAFKAL80ETC concert, 4, 50
Conjured Mana Cake, 2, 4
~~~~


# Gilded rose tech test

This is a well known kata developed by [Terry Hughes](http://iamnotmyself.com/2011/02/13/refactor-this-the-gilded-rose-kata/). This is commonly used as a tech test to assess a candidate's ability to read, refactor and extend legacy code.

Here is the text of the kata:

\*"Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a prominent city run by a friendly innkeeper named Allison. We also buy and sell only the finest goods. Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We have a system in place that updates our inventory for us. It was developed by a no-nonsense type named Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that we can begin selling a new category of items. First an introduction to our system:

All items have a `SellIn` value which denotes the number of days we have to sell the item. All items have a Quality value which denotes how valuable the item is. At the end of each day our system lowers both values for every item. Pretty simple, right? Well this is where it gets interesting:

- Once the sell by date has passed, Quality degrades twice as fast
- The Quality of an item is never negative
- “Aged Brie” actually increases in Quality the older it gets
- The Quality of an item is never more than 50
- “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
- “Backstage passes”, like aged brie, increases in Quality as it’s `SellIn` value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:

- “Conjured” items degrade in Quality twice as fast as normal items

Feel free to make any changes to the `UpdateQuality` method and add any new code as long as everything still works correctly. However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn’t believe in shared code ownership (you can make the `UpdateQuality` method and Items property static if you like, we’ll cover for you)."\*

## The brief:

Choose [legacy code](https://github.com/emilybache/GildedRose-Refactoring-Kata) (translated by Emily Bache) in the language of your choice. The aim is to practice good design in the language of your choice. Refactor the code in such a way that adding the new "conjured" functionality is easy.

You don't need to clone the repo if you don't want to. Feel free to copy [the ruby code](https://github.com/emilybache/GildedRose-Refactoring-Kata/blob/main/ruby/gilded_rose.rb) into a new folder and write your tests from scratch.

HINT: Test first FTW!

## Self-assessment

Once you have completed the challenge and feel happy with your solution, here's a form to help you reflect on the quality of your code:
https://docs.google.com/forms/d/e/1FAIpQLSdi4pNXpobmSpdw8T0dml4m6NrQ71IdEzwO5hA9v9_ZzmW7MA/viewform
