import UrlParser from '../routes/url-parser'
import routes from '../routes/routes'
import '../components/components'

class App {
  constructor ({ header, footer, content }) {
    this._header = header
    this._footer = footer
    this._content = content
  }

  async renderPage () {
    const url = UrlParser.parseActiveCombiner()
    const page = routes[url]
    try {
      this._content.innerHTML = await page.render()
      await page.afterRender()
    } catch (error) {
      this._content.innerHTML = '<not-found></not-found>'
    }
  }
}
export default App