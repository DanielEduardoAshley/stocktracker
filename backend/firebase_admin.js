const admin = require('firebase-admin');
const dotenv = require('dotenv')
dotenv.config({
    path: '../.env'
})

const serviceAccount = require( "./services/serviceAcct.json");


admin.initializeApp({
    credential: admin.credential.cert({
    "type": process.env.SERVICE_ACCT_TYPE,
    "project_id": `${process.env.SERVICE_ACCT_PROJECT_ID}`,
    "private_key_id":process.env.SERVICE_ACCT_PRIVATE_KEY_ID,
    "private_key": `${process.env.PRIVATE_KEY.replace(/\\n/g, '\n')}`,
    "client_email":`${process.env.SERVICE_ACCT_CLIENT_EMAIL}`,
    "client_id":process.env.SERVICE_ACCT_CLIENT_ID,
    "auth_uri":process.env.SERIVCE_ACCT_AUTH_URI,
    "token_uri":process.env.SERVICE_ACCT_TOKEN_URI,
    "auth_provider_x509_cert_url":process.env.SERVICE_ACCT_PROVIDER_X509_CERT_URL,
    "client_x509_cert_url":process.env.SERVICE_ACCT_CLIENT_X509_CERT_URL,
    databaseURL: process.env.FIREBASE_ADMIN_DATABASEURL
  })
})

module.exports = admin


