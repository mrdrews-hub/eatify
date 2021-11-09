import './review.css'
import './review-item'
class Review extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <div class="reviewContainer">
      <h3>Ulasan Pelanggan</h3>
    </div>
    `
  }
}

customElements.define('review-app', Review)