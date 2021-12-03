import '../components/FavoriteButton/FavoriteButton'
import favoriteRestaurantIdb from '../data/favoriteResaturant-idb'

const favoriteButtonInitiator = {
  async init({ likeButton, restaurant }) {
    this._likeButton = likeButton
    this._restaurant = restaurant

    await this._renderButton()
  },

  async _renderButton() {
    const { id } = this._restaurant

    if (await this._isRestaurantExist(id)) {
      this.renderLiked()
    } else {
      this.renderLike()
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await favoriteRestaurantIdb.getRestaurant(id)
    return !!restaurant
  },

  renderLike() {
    this._likeButton.attribute = 'notLike'
    const likeButton = document.querySelector('.btnLove')
    likeButton.addEventListener('click', async () => {
      likeButton.classList.remove('loved')
      await favoriteRestaurantIdb.putRestaurant(this._restaurant)
      this._renderButton()
    })
  },

  renderLiked() {
    this._likeButton.attribute = 'Liked'
    const likeButton = document.querySelector('.btnLove')
    likeButton.addEventListener('click', async () => {
      likeButton.classList.add('loved')
      await favoriteRestaurantIdb.deleteRestaurant(this._restaurant.id)
      this._renderButton()
    })
  }

}

export default favoriteButtonInitiator