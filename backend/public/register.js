//-----------GLOBAL HTML OBJECTS
const register = document.querySelector('.js-registerbtn');


//-----------GLOBAL EVENTS
register.addEventListener('click', (e)=>{
    let password = document.getElementById('rpassword').value
    let first_name = document.getElementById('rfirst_name').value
    let last_name = document.getElementById('rlast_name').value
    let email = document.getElementById('remail').value

    console.log(password)
    e.preventDefault()

    firebase.auth().createUserWithEmailAndPassword(email, password)
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
    })
    .then(credentials=>{
        console.log(credentials)
            
    });

})
