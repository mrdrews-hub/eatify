import './loader.css'
class Loader extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <div class="loading-wrapper">
      <div class="half-circle-spinner">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
      </div>
    </div>
    `
  }
}
customElements.define('loading-bar', Loader)