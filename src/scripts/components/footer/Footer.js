import './footer.css'
class FooterApp extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <footer tabindex="0">
      &copy; Copyright <span class="logo"> EATIFY </span><br>
      By Andre Saputra
    </footer>
    `
  }
}
customElements.define('footer-app', FooterApp)