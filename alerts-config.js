// Public Firebase web-app settings for morning alerts. These identify the Firebase project to the
// browser; they are not secret keys (the private service-account key lives only in Apps Script).
window.OF_ALERTS = {
  firebase: null, // { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId }
  vapidKey: ''    // Firebase → Project settings → Cloud Messaging → Web Push certificates → Key pair
};
