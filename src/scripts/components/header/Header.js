import './Header.css'
import '../drawer/Drawer'
class HeaderApp extends HTMLElement {
  // set clickEvent(event) {
  //   this._clickEvent = event
  //   this.render()
  // }
  connectedCallback() {
    this.render()
  }

  render () {
    this.innerHTML = `
      <header>
        <nav>
            <div class="logo">
                <h1 aria-label="Logo">EATIFY</h1>
            </div>
            <ul>
                <a href="#/home">
                    <li>Home</li>
                </a>

                <a href="#/favorite">
                    <li>Favorite</li>
                </a>

                <a target="_blank" href="https://www.instagram.com/mr_drews/" rel="noopener">
                    <li>About Us</li>
                </a>
            </ul>
            <drawer-button></drawer-button>
          </nav>
      </header>
      `
    this.querySelector('.drawer').addEventListener('click', this._toggleDrawer)
  }

  _toggleDrawer() {
    const menu = this.querySelector('.drawer-menu')
    if (menu.style.display === 'none') {
      this.setAttribute('aria-pressed', true)
      menu.style.display = 'flex'
    } else if (menu.style.display === 'flex') {
      this.removeAttribute('aria-pressed')
      menu.style.display = 'none'
    }
  }
}
customElements.define('header-app', HeaderApp)
