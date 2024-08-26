import { toast } from 'solid-sonner';

const env = location.origin.includes('localhost') ? 'dev' : 'prod';

if (env === 'prod') {
  navigator.serviceWorker.register('sw.js').then((reg) => {
    console.log(reg);
    reg.addEventListener('updatefound', () => {
      setTimeout(() => {
        toast('Update Available', {
          description: 'An update has been downloaded and is ready to be used.',
          action: {
            label: 'Update',
            onClick: () => (location.href = '/item-roulette'),
          },
          duration: Infinity,
        });
      }, 2000);
    });
  });
} else {
  console.log('No service worker in dev.');
  setTimeout(() => {
    toast('Update Available', {
      description: 'An update has been downloaded and is ready to be used.',
      action: {
        label: 'Update',
        onClick: () => (location.href = '/item-roulette'),
      },
      duration: Infinity,
    });
  }, 2000);
}
