const assert = require('assert');

Feature('Unliking Restaurants');
 
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});
 
Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
 
  I.amOnPage('/');
  
  I.seeElement('.restaurant-name a');

  I.click(locate('.restaurant-name a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-name a');

  I.click(locate('.restaurant-name a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#restaurants');
 
  const firstCondition = 'Tidak ada restaurant untuk ditampilkan';
  const noFavRestaurant = await I.grabTextFrom('#restaurants');
  assert.strictEqual(noFavRestaurant, firstCondition);
});