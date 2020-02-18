//-----------HELPER FUNCTIONS
class API{
    constructor(){

    }
    GETRequest(url, cb){
        let request = new XMLHttpRequest()
        request.open('GET', url)
        request.addEventListener('load', (data)=>{
            cb(data)
        })
    }
}

class Storage{
    constructor(key){
        this.key = key
    }

    save(state){
        const data = JSON.stringify(state)
        window.localStorage.setItem(this.key, data)
    }

    get(){
        const data = JSON.parse(window.localStorage.getItem(this.key))
        return data
    }

}

const storage = new Storage('app-state')

//-----------GLOBAL HTML OBJECTS
const login = document.querySelector('.js-loginbtn');
const register = document.querySelector('.js-registerbtn');
const goToRegister = document.querySelector('.js-goto-register');
const inputField = document.querySelector('.js-inputfield');
const loginPage = document.querySelector('.js-login');
const logout = document.querySelector('.logout')

//-----------STATE
let state = {
    show : 'login',

}

let stored_state = storage.get()
if(stored_state){
    console.log('stored_state',stored_state)
    state = stored_state
}

//-----------EVENTS
register.addEventListener('click', (e)=>{
    let password = document.getElementById('rpassword').value
    console.log(password)
    e.preventDefault()

    firebase.auth().createUserWithEmailAndPassword('daniels@gmail.ucsd', password)
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
        if(credentials){
            state.show = 'portfolio'
            render(state)
            storage.save(state)
            console.log(storage())
        }        
    });

})


login.addEventListener('click', ()=>{
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
        if(user){
            state.show = 'portfolio'
        }
        console.log('state',state)
        storage.save(state)  
        render(state)
              
    });
})

logout.addEventListener('click', ()=>{
    state.show = 'login'
    storage.save(state)
    render(state)
    console.log(state)
})

//-----------RENDER

const render =(state)=>{
    if(state.show === 'portfolio'){
        inputField.classList.add('hidden')
        loginPage.classList.add('hidden')
    }
    else if(state.show ==='login'){
        inputField.classList.remove('hidden')
        loginPage.classList.remove('hidden')
    }
}

storage.save(state)
render(state);


