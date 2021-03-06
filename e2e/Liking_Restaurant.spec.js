/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
const assert = require('assert');

Feature('Liking Restaurants');
 
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});
 
Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
 
  I.amOnPage('/');
  
  I.seeElement('.restaurant-name a');

  const firstRestaurant = locate('.restaurant-name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  const likedRestaurantName = await I.grabTextFrom('.restaurant-name');
 
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('searching restaurants', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
 
  I.amOnPage('/');
 
  I.seeElement('.restaurant-name a');
 
  const names = [];
 
  for (let i = 1; i <= 3; i++) {
    I.click(locate('.restaurant-name a').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    names.push(await I.grabTextFrom('.restaurant-detail-name'));
    I.amOnPage('/');
  }
 
  I.amOnPage('/#/favorite');
  I.seeElement('#query');

  const searchQuery = names[1].substring(1, 3);
  const matchingRestaurants = names.filter((name) => name.indexOf(searchQuery) !== -1);
  
  I.fillField('#query', searchQuery);
  I.pressKey('Enter');
  
  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.restaurant-item');
  assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);
  
  matchingRestaurants.forEach(async (name, index) => {
    const visibleName = await I.grabTextFrom(locate('.restaurant-name').at(index + 1));
    assert.strictEqual(name, visibleName);
  });
});