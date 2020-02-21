//-----------GLOBAL HTML OBJECTS
const login = document.querySelector('.js-loginbtn');
const goToRegister = document.querySelector('.js-goto-register');

//-----------GLOBAL EVENTS
login.addEventListener('click', ()=>{
    axios.get()
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
    })
    .then(user=>{
        console.log(user)
       
              
    });
})
