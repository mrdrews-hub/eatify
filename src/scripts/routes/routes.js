import Home from '../view/pages/Home'
import Favorite from '../view/pages/Favorite'
import Detail from '../view/pages/Detail'

const routes = {
  '/': Home,
  '/home': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail
}

export default routes