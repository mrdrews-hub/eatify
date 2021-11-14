import './Header.css'
import '../drawer/Drawer'
class HeaderApp extends HTMLElement {
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
            </nav>
            <drawer-button></drawer-button>
      </header>
      `
    this.querySelector('drawer-button').addEventListener('click', this._toggleDrawer)
  }

  _toggleDrawer() {
    const menu = this.querySelector('.drawer-menu')
    const button = this.querySelector('.drawerButton')
    menu.classList.toggle('active')
    button.classList.toggle('pressed')
  }
}
customElements.define('header-app', HeaderApp)
