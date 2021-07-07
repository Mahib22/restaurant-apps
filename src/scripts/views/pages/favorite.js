/* eslint-disable no-new */

import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './liked-restaurants/favorite-restaurant-search-presenter';
import { createRestaurantItemTemplate, createHeroElement } from '../templates/template-creator';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
    async render() {
        return view.getTemplate();
    },
   
    async afterRender() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        const heroContainer = document.querySelector('#hero');
        heroContainer.innerHTML = createHeroElement();

        new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
        new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    },
};
   
export default Favorite;