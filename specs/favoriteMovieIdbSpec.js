import { itsActAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract'
import favoriteRestaurantIdb from '../src/scripts/data/favoriteResaturant-idb'

describe('Favorite Restaurant Contract Test Implementastion', () => {
  afterEach(async () => {
    (await favoriteRestaurantIdb.getAllRestaurant()).forEach(async (restaurant) => {
      await favoriteRestaurantIdb.deleteRestaurant(restaurant.id)
    })
  })

  itsActAsFavoriteRestaurantModel(favoriteRestaurantIdb)
})