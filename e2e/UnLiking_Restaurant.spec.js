const assert = require('assert')

Feature('UnLiking Restaurants')

let firstRestaurantTitle
Before(async ({ I }) => {

  I.amOnPage('/')

  I.seeElement('.restoName a')
  const firstRestaurant = locate('.restoName a').first()
  firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)

  I.click(firstRestaurant)

  I.seeElement('.btnLove')
  I.click('.btnLove')

  I.amOnPage('/#/favorite')
})

Scenario('Showing favorited restaurant', async ({ I }) => {
  I.seeElement('card-app')
  const likedRestaurantTitle = await I.grabTextFrom('.restoName')

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unfavoriting a resto', ({ I }) => {
  I.seeElement('.restoName')

  I.click(locate('.restoName a').first())

  I.seeElement('.btnLove')
  I.click('.btnLove')

  I.amOnPage('/#/favorite')

  I.see('Restoran Favoritmu Masih Kosong', '.menu-title')
})