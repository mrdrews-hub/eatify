import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import App from './view/App'
import swRegister from './utils/sw-register'
import webSokcetInitiator from './utils/websokcet-initiator'
import CONFIG from './global/config'

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
  webSokcetInitiator.init(CONFIG.WEBSOCKET_SERVER)
})
