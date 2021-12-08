class ReviewItem extends HTMLElement {
  set reviews(review) {
    this._reviews = review
    this.render()
  }

  render() {
    this.innerHTML = /* html */`
      <div class="review" tabindex="0">
        <p><span>Oleh: </span>${this._reviews.name}</p>
        <p><span>Ulasan: </span>${this._reviews.review}</p>
        <p><span>Diulas Pada: </span>${this._reviews.date}</p>
      </div>
    `
  }
}

customElements.define('review-item', ReviewItem)