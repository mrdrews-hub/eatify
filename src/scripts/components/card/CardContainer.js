import './card.css'
import './Card'
class CardContainer extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <div class="card-list">
    </div>
    `
  }
}
customElements.define('card-container', CardContainer)