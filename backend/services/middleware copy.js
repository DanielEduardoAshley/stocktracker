const admin = require('../firebase_admin');

const getAuthToken=(req, res, next)=>{
  if(
    req.headers.authorization && req.headers.authorization.split(' ')[0]==='Bearer'
  ){
    req.authToken = req.headers.authorization.split(' ')[1]
  }
  else{
    req.authToken = null;
  }
  next();
}

const checkAuthenticated = ( req, res, next )=>{
  getAuthToken( req, res, async()=>{
    try{
      const { authToken } = req;
      const userInfo = await admin
        .auth()
        .verifyIdToken(authToken);
      req.authId = userInfo.uid;

      return next();
    } catch(e){
      return res.redirect('/user/login').send('Unauthorized Request')
    }
  })


}

module.exports = checkAuthenticated