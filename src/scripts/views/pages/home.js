import RestaurantSource from '../../data/restaurant-source';
import { createHeroElement, createRestaurantItemTemplate, createSkeletonTemplate } from '../templates/template-creator';

const Home = {
    async render() {
        return `
        <div id="hero"></div>

        <section class="restaurant-section">
            <div class="section-title">
                <h1>Restoran Disekitarmu</h1>
            </div>

            <div class="restaurant-list" id="restaurants">
                ${createSkeletonTemplate(15)}
            </div>
        </section>
        `;
    },

    async afterRender() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        const heroContainer = document.querySelector('#hero');
        heroContainer.innerHTML = createHeroElement();

        const restaurants = await RestaurantSource.restaurantList();
        const restaurantsContainer = document.querySelector('#restaurants');
        restaurantsContainer.innerHTML = '';
        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },
};


export default Home;