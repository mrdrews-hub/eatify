import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import App from './view/App'

const app = new App({
  header: document.querySelector('header-app'),
  footer: document.querySelector('footer-app'),
  content: document.querySelector('#mainContent')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
})
