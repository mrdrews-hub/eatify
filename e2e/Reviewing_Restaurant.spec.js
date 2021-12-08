const assert = require('assert')

Feature('Review Restaurant')

let restaurantName
Before( async ({ I }) => {
  I.amOnPage('/')
  I.seeElement('.restoName')
  restaurantName = await I.grabTextFrom('.restoName a')
  I.click(locate('.restoName a').first())
})

Scenario('Showing Detail of clicked restaurant', async ({ I }) => {
  I.seeElement('.btnLove')
  const detailRestaurantName = await I.grabTextFrom('.name h2')

  assert.strictEqual(restaurantName,detailRestaurantName)
})

Scenario('Reviewing Restaurant', async ({ I }) => {
    const timeStamp = Date.now()
    const nameOfReviewer = `CodeName ${timeStamp}`
    const reviewContent = `ReviewCode ${timeStamp}`

    I.seeElement('review-form')

    I.fillField('#inputNama', nameOfReviewer)
    I.fillField('#inputReview', reviewContent)
    I.click('button[type="submit"]')

    const submittedNameReviewer = await I.grabTextFrom(locate('.review p:nth-child(1)').last())
    const submittedReviewContent = await I.grabTextFrom(locate('.review p:nth-child(2)').last())

    const submittedNameReviewerWithoutSpan = submittedNameReviewer.split(':').slice(1).join('').trim()
    const submittedRevieweWithoutSpan = submittedReviewContent.split(':').slice(1).join('').trim()

    assert.strictEqual(nameOfReviewer, submittedNameReviewerWithoutSpan)
    assert.strictEqual(reviewContent, submittedRevieweWithoutSpan)
})