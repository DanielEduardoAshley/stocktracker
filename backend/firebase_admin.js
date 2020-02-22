const admin = require('firebase-admin');
const serviceAccount = require("./services/serviceAcct.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://stocktracker-9ee41.firebaseio.com"
  });

module.exports = admin