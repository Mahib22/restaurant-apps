/* eslint-disable class-methods-use-this */
import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView{
    getTemplate() {
        return `
            <div id="hero"></div>

            <section class="restaurant-section">
                <div class="section-title">
                    <h1>Restoran Favoritmu</h1>
                </div>

                <input id="query" type="text">
                <div class="restaurant-list" id="restaurants"></div>
            </section>
        `;
    }
    
    runWhenUserIsSearching(callback) {
        document.getElementById('query').addEventListener('change', (event) => {
          callback(event.target.value);
        });
    }

    showRestaurants(restaurants) {
        this.showFavoriteRestaurants(restaurants);
    }

    showFavoriteRestaurants(restaurants = []) {
        let html;

        if (restaurants.length) {
            html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
        } else {
            html = this._getEmptyRestaurantTemplate();
        }

        document.getElementById('restaurants').innerHTML = html;
        document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
    }

    _getEmptyRestaurantTemplate(){
        return '<div class="restaurant-item__not__found">Tidak ada restaurant untuk ditampilkan</div>';
    }
}

export default FavoriteRestaurantSearchView;