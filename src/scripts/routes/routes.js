import RestoHome from '../views/pages/RestoHome';
import Restodetail from '../views/pages/RestoDetail';
import RestoFavorite from '../views/pages/RestoFavorite';

const routes = {
  '/': RestoHome,
  '/detail/:id': Restodetail,
  '/favorite': RestoFavorite,
};

export default routes;
