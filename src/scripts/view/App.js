import UrlParser from '../routes/url-parser'
import routes from '../routes/routes'
import '../components/components'

class App {
  constructor ({ header, footer, content }) {
    this._header = header
    this._footer = footer
    this._content = content

    // this._initialAppShell()
  }

  // _initialAppShell () {
  //   DrawerInitiator.init({
  //     button: this._button,
  //     drawer: this._drawer,
  //     content: this._content
  //   })
  // }

  async renderPage () {
    const url = UrlParser.parseActiveCombiner()
    const page = routes[url]
    this._content.innerHTML = await page.render()
    await page.afterRender()
  }
}
export default App