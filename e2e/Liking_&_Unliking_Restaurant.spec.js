/* eslint-disable no-undef */

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restaurants');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-not__found');
});

Scenario('liking and unliking restaurant', ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-not__found');
  I.amOnPage('#/');
  I.seeElement('#restaurants');
  I.seeElement('.restaurant__title a');
  I.click(locate('#restaurant-link').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('#/favorite');
  I.seeElement('#restaurants');

  I.seeElement('.restaurant__title a');
  I.click(locate('#restaurant-link').first());
  
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorite');
  I.seeElement('#restaurants');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-not__found');
});
