import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

const Detail = {
    async render() {
        return `
            <section id="restaurant" class="restaurant-detail"></section>
            <div id="likeButtonContainer"></div>
        `;
    },

    async afterRender() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantSource.detailRestaurant(url.id);
        const restaurantContainer = document.querySelector('#restaurant');
        restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);

        LikeButtonPresenter.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            favoriteRestaurants: FavoriteRestaurantIdb,
            restaurant: {
              id: restaurant.restaurant.id,
              name: restaurant.restaurant.name,
              description: restaurant.restaurant.description,
              rating: restaurant.restaurant.rating,
              city: restaurant.restaurant.city,
              pictureId: restaurant.restaurant.pictureId,
            },
        });
    },
};


export default Detail;