import * as firebase from './firebase.js'
import modifier from '../utils.js'

function register(user){
    return firebase.auth.createUserWithEmailAndPassword(user.email, user.password)
}

function login(email, password){
    return firebase.auth.signInWithEmailAndPassword(email, password)
}

function logout(){
    return firebase.auth.signOut()
}

export { 
    register,
    login,
    logout
    }