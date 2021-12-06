import './notfound.css'
class NotFound extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML =
    `<div class="image-notFound-container">
      <div class="NotFound-text">
        <h3 tabindex="0">Hmm... Sepertinya ada yang salah</h3><br>
        <a href="#/home" class="direct-home">Kembali ke halama utama</a>
      </div>
      <div class="image-notFound">
        <img src="/images/13.png" alt="">
      </div>
    </div>
    `
  }
}
customElements.define('not-found', NotFound)