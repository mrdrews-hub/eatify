import RestaurantSource from '../../data/restaurant-source'
import UrlParser from '../../routes/url-parser'
import '../../components/detail/detail-app'
import '../../components/review/Review'
import '../../components/form/review-form'
import favoriteButtonInitiator from '../../utils/favoriteButton-initiator'
class Detail {
  static async render() {
    return `
    <div id="detail-content">
      <detail-app></detail-app>
      <review-list></review-list>
      <review-form></review-form>
    </div>
  `
  }

  static async afterRender() {
    const componentDetail = document.querySelector('detail-app')
    const url = UrlParser.parseActiveWithoutCombiner()
    const restaurant = await RestaurantSource.detailRestaurant(url.id)
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
      // Onclick Submit append review ke component review
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
  }
}

export default Detail