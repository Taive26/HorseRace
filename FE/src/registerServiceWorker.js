/* eslint-disable no-console */

import { register } from 'register-service-worker'
const filesToCache = [
  '/',
  './img/icons/favicon-32x32.png',
  './img/icons/android-chrome-192x192.png',
  'style/main.css',
  'images/still_life_medium.jpg',
  'index.html',
  'pages/offline.html',
  'pages/404.html'
];


const staticCacheName = 'pages-cache-v4';

console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker has been registered.')
      self.addEventListener('install', event => {
        console.log('Attempting to install service worker and cache static assets');
        event.waitUntil(
          caches.open(staticCacheName)
          .then(cache => {
            return cache.addAll(filesToCache);
          })
        );
      });
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
