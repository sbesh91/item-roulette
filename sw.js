const env = location.origin.includes('localhost') ? 'dev' : 'prod';
if (env === 'prod') {
  navigator.serviceWorker.register('sw.js');
} else {
  console.log('No service worker in dev.');
}
