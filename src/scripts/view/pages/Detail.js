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

    const componentreview = componentDetail.querySelector('review-form')
    const btnSubmit = componentreview.querySelector('.btn-submit')
    btnSubmit.addEventListener('click', async (el) => {
      el.preventDefault()
      const review = {
        id: url.id,
        name: componentreview.valueNama,
        review: componentreview.valueReview
      }
      const response = await RestaurantSource.POSTreview(review)
      componentreview.reviews = response
      alert('Sukses!! Review Telah Terkirim')
      componentreview.valueNama = ''
      componentreview.valueReview = ''
      // Onclick Submit append review ke component review
    })
  }
}

export default Detail