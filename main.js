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

    save( state){
        const data = Stringify(state)
        Window.storage.save(this.key, data)
    }

    get(){
        const data = JSON.parse(Window.storage.get(this.key))
        return data
    }

}

const storage = new Storage('app-state')

//-----------GLOBAL HTML OBJECTS
const login = document.querySelector('.js-loginbtn');
const register = document.querySelector('.js-registerbtn');
const gotoRegister = document.querySelector('.js-goto-register');

//-----------STATE

//-----------RENDER

//-----------EVENTS