import RestaurantSource from '../../data/restaurant-source'
import UrlParser from '../../routes/url-parser'
import '../../components/detail/detail-app'
import '../../components/review/Review'
import '../../components/form/review-form'
import '../../components/loader/loader'
import favoriteButtonInitiator from '../../utils/favoriteButton-initiator'
class Detail {
  static async render() {
    return `
    <div id="detail-content">
    
    </div>
  `
  }

  static async afterRender() {
    document.body.scrollTop = 0
    const skipToContent = document.querySelector('.skip-link')
    const url = UrlParser.parseActiveWithoutCombiner()
    const detailContent = document.querySelector('#detail-content')
    detailContent.innerHTML = '<loading-bar></loading-bar>'
    const restaurant = await RestaurantSource.detailRestaurant(url.id)
    detailContent.innerHTML = `<detail-app></detail-app>
    <review-list></review-list>
    <review-form></review-form>`
    const componentDetail = document.querySelector('detail-app')
    const reviewList = document.querySelector('review-list')
    componentDetail.detail = restaurant
    reviewList.reviews = restaurant.customerReviews

    // REVIEW
    const componentreview = document.querySelector('review-form')
    const btnSubmit = componentreview.querySelector('.btn-submit')
    btnSubmit.addEventListener('click', async (el) => {
      el.preventDefault()
      const review = {
        id: url.id,
        name: componentreview.valueNama,
        review: componentreview.valueReview
      }
      const response = await RestaurantSource.POSTreview(review)
      reviewList.reviews = response.customerReviews
      componentreview.valueNama = ''
      componentreview.valueReview = ''
    })

    // FAVORITE BTN
    favoriteButtonInitiator.init({
      likeButton: document.querySelector('favorite-button'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating
      }
    })

    skipToContent.addEventListener('click', (el) => {
      document.querySelector('#detail').focus()
      document.querySelector('#detail').scrollIntoView()
      console.log(el)
    })
  }
}

export default Detail