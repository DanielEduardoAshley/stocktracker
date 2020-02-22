//-----------GLOBAL HTML OBJECTS
const register = document.querySelector('.js-registerbtn');


//-----------GLOBAL EVENTS
register.addEventListener('click', (e)=>{
    let password = document.getElementById('rpassword').value
    let first_name = document.getElementById('rfname').value
    let last_name = document.getElementById('rlname').value
    let email = document.getElementById('remail').value

    console.log(password)
    e.preventDefault()

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(credentials=>{
        console.log(credentials)
        const user_uid = credentials.user.uid
        const sessions_id = 1234
        const token = firebase.auth().getIdToken() 
        axios({
            method: 'post',
            url: 'http://localhost:3005/user/new',
            data: {
              first_name,
              last_name,
              user_uid,
              email,
              sessions_id
            },
            header: { authorization: `Bearer ${token}` }
        })

    }).then(_=>{
        console.log('success')
        window.location.href = 'http://localhost:3005/user/portfolio'

    })
    .catch(function(error) {
         // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
    });

})
