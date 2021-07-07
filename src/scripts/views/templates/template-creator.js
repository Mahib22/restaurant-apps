/* eslint-disable arrow-parens */

import CONFIG from '../../globals/config';
import AvatarGenerator from '../../utils/avatar-generator';

const createRestaurantDetailTemplate = (restaurant) => `
    <article class="restaurant-item">
        <img
            class="restaurant-hero"
            src="${CONFIG.BASE_IMAGE_URL + CONFIG.IMAGE_MEDIUM + restaurant.pictureId}"
            alt="${restaurant.name}"
        />

        <div class="restaurant-content">
            <p class="restaurant-detail-name">
                ${restaurant.name}
            </p>

            <p class="restaurant-rating icon-text">
                <span class="fa fa-star icon-small"></span> ${restaurant.rating}
            </p>
            <p class="restaurant-location icon-text">
                <span class="fa fa-map-marker icon-small"></span> ${restaurant.address}, ${restaurant.city}
            </p>
            <p class="restaurant-categories icon-text">
                <span class="fa fa-cutlery icon-small"></span> ${restaurant.categories.map(category => category.name).join(', ')}
            </p>
            
            <p class="restaurant-detail-description">
                ${restaurant.description}
            </p>
        </div>
    </article>

    <div class="section-title">
        <h1>Daftar Menu</h1>
    </div>

    <div class="menu-content">
        <div class="menu-container">
            <p class="menu-title">Makanan</p>
            <ul class="menu-list">
                ${restaurant.menus.foods.map((food) => `<li class="menu-item"><p>${food.name}</p></li>`).join('')}
            </ul>
        </div>

        <div class="menu-container">
            <p class="menu-title">Minuman</p>
            <ul class="menu-list">
                ${restaurant.menus.drinks.map((drink) => `<li class="menu-item"><p>${drink.name}</p></li>`).join('')}
            </ul>
        </div>
    </div>

    <div class="section-title">
        <h1>Consumer Reviews</h1>
    </div>

    <div class="review-container">
        ${restaurant.customerReviews.map(review => `
            <div class="review-item">
                <div class="review-avatar">
                    <img width="60px" height="60px" loading="lazy" src="${AvatarGenerator.generate()}" alt="${review.name} avatar">
                </div>
                <div class="review-content">
                    <p class="review-title">${review.name}</p>
                    <span class="review-date">${review.date}</span>
                    <p class="review-text">${review.review}</p>
                </div>
            </div>
        `).join('')}
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <article class="restaurant-item">
        <img
            class="restaurant-thumbnail lazyload"
            data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + CONFIG.IMAGE_SMALL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}"
            alt="${restaurant.name || '-'}"
        />
        <div class="restaurant-content">
            <div class="restaurant-icon">
                <p class="restaurant-location">
                    <span class="fa fa-map-marker"></span> ${restaurant.city || '-'}
                </p>
                <p class="restaurant-rating">
                    <span class="fa fa-star"></span> ${restaurant.rating || '-'}
                </p>
            </div>
            <h1 class="restaurant-name">
                <a href="${`/#/detail/${restaurant.id}`}">${restaurant.name || '-'}</a>
            </h1>
            <p class="restaurant-description">
                ${restaurant.description || '-'}
            </p>
        </div>
    </article>
`;

const createSkeletonTemplate = (count) => {
    let template = '';
  
    for (let i = 0; i < count; i += 1) {
        template += `
            <article class="restaurant-item">
                <img
                    class="restaurant-thumbnail"
                    src="./images/placeholder.png"
                    alt="skeleton"
                />
                <div class="restaurant-content">
                    <div class="restaurant-icon">
                        <p class="restaurant-location">
                            <img
                                src="./images/placeholder.png"
                                alt="skeleton"
                            />
                        </p>
                        <p class="restaurant-rating">
                            <img
                                src="./images/placeholder.png"
                                alt="skeleton"
                            />
                        </p>
                    </div>
                    <h1 class="restaurant-name">
                        <img
                            src="./images/placeholder.png"
                            width="100%"
                            height="30px"
                            alt="skeleton"
                        />
                    </h1>
                    <p class="restaurant-description">
                        <img
                            src="./images/placeholder.png"
                            width="100%"
                            alt="skeleton"
                        />
                    </p>
                </div>
            </article>
        `;
    }
    return template;
};

const createHeroElement = () => `
    <picture>
        <source media="(max-width: 600px)" srcset="./images/hero/hero-image-small.jpg">
        <img class="hero-image" src="./images/hero/hero-image.jpg" alt="hero image" />
    </picture>

    <div class="hero-title">
        <h1 class="hero-text">Mau Makan Dimana Hari Ini?</h1>
    </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
 
const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { 
    createRestaurantDetailTemplate, 
    createRestaurantItemTemplate, 
    createHeroElement, 
    createLikeRestaurantButtonTemplate, 
    createUnlikeRestaurantButtonTemplate,
    createSkeletonTemplate, 
};