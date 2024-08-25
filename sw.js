const env = location.origin.includes('localhost') ? 'dev' : 'prod';
if (env === 'prod') {
  navigator.serviceWorker.register('sw.js').then((reg) => {
    console.log(reg);
    reg.addEventListener('updatefound', console.log);
  });
} else {
  console.log('No service worker in dev.');
}
