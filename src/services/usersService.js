import * as firebase from './firebase.js'

function register(user){
    return firebase.auth.createUserWithEmailAndPassword(user.email, user.password)
}

function login(email, password){
    return firebase.auth.signInWithEmailAndPassword(email, password)
}

function logout(){
    return firebase.auth.signOut()
}

function addUserToCollection(user){
    return firebase.db.collection('users').add(user)
}

function addUserMovies(data){
        return firebase.db.collection('users').add(data)
}


function getUserMovies(data){
    return firebase.db.collection('users').get()
}



export { 
    register,
    login,
    logout,
    getUserMovies, 
    addUserMovies, 
    addUserToCollection}