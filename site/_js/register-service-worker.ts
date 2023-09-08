if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then(() => {
      console.log('Service worker registered.');
    })
    .catch((error) => {
      console.log('Registration failed: ', error);
    });
}
