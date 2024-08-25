import { toast } from 'solid-sonner';

const env = location.origin.includes('localhost') ? 'dev' : 'prod';

if (env === 'prod') {
  navigator.serviceWorker.register('sw.js').then((reg) => {
    console.log(reg);
    reg.addEventListener('updatefound', () => {
      toast('Update Available');
    });
  });
} else {
  console.log('No service worker in dev.');
}
