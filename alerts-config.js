// Public Firebase web-app settings for morning alerts. These identify the Firebase project to the
// browser; they are not secret keys (the private service-account key lives only in Apps Script).
window.OF_ALERTS = {
  firebase: {
    apiKey: 'AIzaSyCUquW64i4MiQou2uGk_v_FTZaqmcHWNZ8',
    authDomain: 'of-ledger.firebaseapp.com',
    projectId: 'of-ledger',
    storageBucket: 'of-ledger.firebasestorage.app',
    messagingSenderId: '174226011711',
    appId: '1:174226011711:web:e9b45be7d2f722eec36a8a'
  },
  // Firebase → Settings → Cloud Messaging → Web Push certificates → Key pair (public half)
  vapidKey: 'BNxkLkltqCRc29rCemny0eRNwYlXQgeCiM96zpBVLCf8xtiFBg05JJCubNSJauPfSLmBMVb80khzhpW-mh1iNMo'
};
