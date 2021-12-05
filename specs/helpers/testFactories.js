import favoriteButtonPresenter from '../../src/scripts/utils/favoriteButton-presenter'
import favoriteRestaurantIdb from '../../src/scripts/data/favoriteResaturant-idb'

const createFavoriteButtonPresenterRestaurant = async (restaurant) => {
  await favoriteButtonPresenter.init({
    likeButton: document.querySelector('favorite-button'),
    favoriteRestaurant: favoriteRestaurantIdb,
    restaurant
  })
}

export { createFavoriteButtonPresenterRestaurant }