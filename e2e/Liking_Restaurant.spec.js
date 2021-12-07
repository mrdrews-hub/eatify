Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

const assert = require('assert')

Scenario('Showing empty favorite resaurant', ({ I }) => {
  I.seeElement('.favorite-null')
  I.see('Restoran Favoritmu Masih Kosong', '.menu-title')
})

Scenario('Liking one restaurant', async ({ I }) => {
  I.amOnPage('/')

  I.seeElement('.restoName a')

  const firstRestaurant = locate('.restoName a').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.seeElement('.btnLove')
  I.click('.btnLove')

  I.amOnPage('/#/favorite')
  I.seeElement('card-app')
  const likedRestaurantTitle = await I.grabTextFrom('.restoName')

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle)
});
