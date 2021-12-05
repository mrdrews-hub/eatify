const favoriteButtonPresenter = {
  async init({ likeButton, favoriteRestaurant, restaurant }) {
    this._likeButton = likeButton
    this._restaurant = restaurant
    this._favoriteRestaurant = favoriteRestaurant
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
    const restaurant = await this._favoriteRestaurant.getRestaurant(id)
    return !!restaurant
  },

  renderLike() {
    this._likeButton.attribute = 'notLiked'
    this._likeButton.label = 'Tambah favorit'
    const likeButton = document.querySelector('.btnLove')
    likeButton.addEventListener('click', async () => {
      likeButton.classList.remove('loved')
      await this._favoriteRestaurant.putRestaurant(this._restaurant)
      this._renderButton()
    })
  },

  renderLiked() {
    this._likeButton.attribute = 'Liked'
    this._likeButton.label = 'Batal tambah favorit'
    const likeButton = document.querySelector('.btnLove')
    likeButton.addEventListener('click', async () => {
      likeButton.classList.add('loved')
      await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id)
      this._renderButton()
    })
  }

}

export default favoriteButtonPresenter