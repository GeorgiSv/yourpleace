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

function generateUserCollection(data){
    return firebase.db.collection('userDetails').add(data);
}

async function getUserFromCollection(uid){
    
    let collection = await firebase.db.collection('userDetails')
        .get()
        .then((res) => res.docs.map(el => modifier(el)));

    return collection.filter(x => x.uid === uid)[0]
}


async function updateUser(data){
    
    let result = await firebase.db.collection('userDetails')
        .doc(data.id)
        .update(data)
}


// function logout(){
//     return firebase.db.collection("userDetails").
// }

export { 
    register,
    login,
    logout,
    generateUserCollection,
    getUserFromCollection,
    updateUser
    }