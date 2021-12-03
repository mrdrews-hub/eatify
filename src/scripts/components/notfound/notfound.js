import './notfound.css'
class NotFound extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML =
    `<div class="image-notFound-container">
      <div class="NotFound-text">
        <h3 tabindex="0">Oops...Konten Tidak Ditemukan</h3><br>
      </div>
      <div class="image-notFound">
        <img src="/images/13.png" alt="">
      </div>
    </div>
    `
  }
}
customElements.define('not-found', NotFound)