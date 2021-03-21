import * as firebase from './firebase.js'


function addUserMovies(data){
        return firebase.db.collection('users').add(data)
}


function getUserMovies(data){
    return firebase.db.collection('users').get()
}



export { getUserMovies, addUserMovies}