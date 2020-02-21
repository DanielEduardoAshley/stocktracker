const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "https://stocktracker-9ee41.firebaseio.com"
});

module.exports = admin