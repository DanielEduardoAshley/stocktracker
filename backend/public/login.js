

//-----------GLOBAL HTML OBJECTS
const login = document.querySelector('.js-loginbtn');
const goToRegister = document.querySelector('.js-goto-register');

//-----------GLOBAL EVENTS
login.addEventListener('click', ()=>{
    
    console.log('start')
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(async (user)=>{
        console.log(user)
        const token = await firebase.auth().currentUser.getIdToken()
        console.log(token)
        axios.get('http://localhost:3005/stock/',{headers:  
        { authorization: `Bearer ${token}` }})

        // window.location.href = "http://localhost:3005/stock/";
    })
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
    
    console.log('finish')

})

goToRegister.addEventListener('click', ()=>{
    console.log('hi')
    window.location.href = "http://localhost:3005/user/register";


})