import RestaurantSource from '../../data/restaurant-source'
import UrlParser from '../../routes/url-parser'
import '../../components/detail/detail-app'
class Detail {
  static async render() {
    return `
    <div id="content">
      <detail-app></detail-app>
    </div>
  `
  }

  static async afterRender() {
    const componentDetail = document.querySelector('detail-app')
    const url = UrlParser.parseActiveWithoutCombiner()
    const restaurant = await RestaurantSource.detailRestaurant(url.id)
    componentDetail.detail = restaurant
  }
}

export default Detail