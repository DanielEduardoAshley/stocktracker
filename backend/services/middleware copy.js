const admin = require('../firebase_admin');

const getAuthToken=(req, res, next)=>{
  if(
    req.headers.authorization && req.headers.authorization.split(' ')[0]==='Bearer'
  ){
    req.authToken = req.headers.authorization.split(' ')[1]
    console.log('notnull', req.authToken)
  }
  else{
    console.log('null', req.authToken)
    req.authToken = null;
  }
  next();
}

const checkAuthenticated = ( req, res, next )=>{
  getAuthToken( req, res, async()=>{
    try{
      // console.log('asdas',req.headers.authorization.split(' ')[1])
      const { authToken } = req;
      console.log('authToken', authToken)
      const userInfo =  await admin
        .auth()
        .verifyIdToken(`${authToken}`)
      console.log('userInfo', req.headers.authorization.split(' ')[1])
      req.authId = userInfo.uid;
      console.log('here', req.authId)

      return next();
    } catch(e){

      console.log(e)

      // res.redirect('/user/login')
    }
  })


}

module.exports = checkAuthenticated