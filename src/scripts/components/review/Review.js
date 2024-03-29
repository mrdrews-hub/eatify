import './review.css'
import './review-item'
class Review extends HTMLElement {
  set reviews(review) {
    this._reviews = review
    this.render()
  }

  render() {
    this.innerHTML = `
    <div class="reviewContainer">
      <h3 tabindex="0">Ulasan Pelanggan</h3>
    </div>
    `
    this._reviews.forEach(review => {
      const reviewComponent = document.createElement('review-item')
      reviewComponent.reviews = review
      this.querySelector('.reviewContainer').appendChild(reviewComponent)
    })
  }
}

customElements.define('review-list', Review)