// Settings for the LIVE site (ofturnkey.github.io/of-ledger). The test site has its own copy of this file.
// The publish script fills in 2026-10-29 19:20.
var CONFIG = {
  env: 'live',
  version: '2026-10-29 19:20',
  // The live Apps Script web app (the same address the old app had; data only, it never serves screens).
  api: 'https://script.google.com/macros/s/AKfycbx_nKh4qcxfQMd-s9FS_bsYjUMueoE7U-bKdTKdKY6nj1ssNeaafDOwLPr4ZFLeurpK/exec',
  // "O F Turnkey launcher" OAuth client (Sign in with Google). Not a secret.
  clientId: '174226011711-g53cncop1stgb4vsmt5ia4j0qfsluc25.apps.googleusercontent.com',
  alerts: '',
  // Firebase web settings (public; the same values as the old launcher's alerts-config.js). The private
  // service-account key lives only in the live app's Script Properties.
  firebase: {
    app: {
      apiKey: 'AIzaSyCUquW64i4MiQou2uGk_v_FTZaqmcHWNZ8', authDomain: 'of-ledger.firebaseapp.com', projectId: 'of-ledger',
      storageBucket: 'of-ledger.firebasestorage.app', messagingSenderId: '174226011711', appId: '1:174226011711:web:e9b45be7d2f722eec36a8a'
    },
    vapidKey: 'BNxkLkltqCRc29rCemny0eRNwYlXQgeCiM96zpBVLCf8xtiFBg05JJCubNSJauPfSLmBMVb80khzhpW-mh1iNMo'
  }
};
