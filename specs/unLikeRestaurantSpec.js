// import favoriteButtonInitiator from './../src/scripts/utils/favoriteButton-initiator'
import * as TestFactories from './helpers/testFactories'
import favoriteRestaurantIdb from '../src/scripts/data/favoriteResaturant-idb'

const addFavoriteButton = () => {
  document.body.innerHTML = '<favorite-button></favorite-button>'
}

describe('Unliking a Restaurant', () => {
  beforeEach(async () => {
    addFavoriteButton()
    await favoriteRestaurantIdb.putRestaurant({ id: 1 })
  })
  afterEach(async () => {
    await favoriteRestaurantIdb.deleteRestaurant(1)
  })

  it('should display unlike button when the restaurant has been liked', async () => {
    await TestFactories.createFavoriteButtonPresenterRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="Batal tambah favorit"]'))
      .toBeTruthy()
  })

  it('should not display like button when the restaurant has been liked', async () => {
    await TestFactories.createFavoriteButtonPresenterRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="Tambah favorit"]'))
      .toBeFalsy()
  })

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createFavoriteButtonPresenterRestaurant({ id: 1 })

    document.querySelector('[aria-label="Batal tambah favorit"]')
      .dispatchEvent(new Event('click'))

    expect(await favoriteRestaurantIdb.getAllRestaurant()).toEqual([])
  })
  
  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createFavoriteButtonPresenterRestaurant({ id: 1 })
    await favoriteRestaurantIdb.deleteRestaurant(1)

    document.querySelector('[aria-label="Batal tambah favorit"]')
      .dispatchEvent(new Event('click'))

    expect(await favoriteRestaurantIdb.getAllRestaurant()).toEqual([])
  })
})