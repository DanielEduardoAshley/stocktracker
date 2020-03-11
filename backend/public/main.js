
//-----------GLOBAL HTML OBJECTS

// const inputField = document.querySelector('.js-inputfield');
const logout = document.querySelector('.logout')



//-----------EVENTS
logout.addEventListener('click', ()=>{
    firebase.auth().signOut()
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log('signed in')
        }else{
            console.log('signed out')
        }
      });
   
})




