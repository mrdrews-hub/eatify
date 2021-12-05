// import favoriteButtonInitiator from './../src/scripts/utils/favoriteButton-initiator'
import * as TestFactories from './helpers/testFactories'
import favoriteRestaurantIdb from '../src/scripts/data/favoriteResaturant-idb'
import '../src/scripts/components/FavoriteButton/FavoriteButton'

describe('Liking Restaurant', () => {
  const addFavoriteButton = () => {
    document.body.innerHTML = '<favorite-button></favorite-button>'
  }
  beforeEach(() => {
    addFavoriteButton()
  })

  it('should show the favorite button when the restaurant has not been liked before', async () => {
    await TestFactories.createFavoriteButtonPresenterRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="Tambah favorit"]'))
      .toBeTruthy()
  })

  it('should not show the favorite button when the restaurant has not been liked before', async () => {
    await TestFactories.createFavoriteButtonPresenterRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="Batal tambah favorit"]'))
    .toBeFalsy()
  })

  it('should be able to like the restaurant', async () => {
    await TestFactories.createFavoriteButtonPresenterRestaurant({ id: 1 })

    document.querySelector('.btnLove').dispatchEvent(new Event('click'))
    const restaurant = await favoriteRestaurantIdb.getRestaurant(1)

    expect(restaurant).toEqual({ id: 1 })

    favoriteRestaurantIdb.deleteRestaurant(1)
  })

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createFavoriteButtonPresenterRestaurant({ id: 1 })

    await favoriteRestaurantIdb.putRestaurant({ id: 1 })

    document.querySelector('.btnLove').dispatchEvent(new Event('click'))
    expect(await favoriteRestaurantIdb.getAllRestaurant()).toEqual([{ id: 1 }])

    favoriteRestaurantIdb.deleteRestaurant(1)
  })

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createFavoriteButtonPresenterRestaurant({})

    document.querySelector('.btnLove').dispatchEvent(new Event('click'))
    expect(await favoriteRestaurantIdb.getAllRestaurant()).toEqual([])
  })
})