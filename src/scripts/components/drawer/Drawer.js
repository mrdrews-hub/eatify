import './drawer.css'
class Drawer extends HTMLElement {
  constructor() {
    super()
    this.render()
    this.setAttribute('class', 'drawer')
  }

  render() {
    this.innerHTML = /* html */`          
    <button class="drawerButton" aria-label="menu navigasi">
      <span></span>
      <span></span>
      <span></span>
    </button>
      <div class="drawer-menu">
        <a href="#/home">Home</a>
        <a href="#/favorite">Favorite</a>
        <a href="https://www.instagram.com/mr_drews/" rel="noopener">About Us</a>
      </div> `
  }
}
customElements.define('drawer-button', Drawer)