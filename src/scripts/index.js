import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import App from './view/App'
import swRegister from './utils/sw-register'

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
  swRegister()
})
