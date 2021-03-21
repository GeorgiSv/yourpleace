import * as firebase from './firebase.js'


function addPost(data){
        return firebase.db.collection('forumposts').add(data)
}

function getAllPosts(){
    return firebase.db.collection('forumposts').get()
}

export { addPost, getAllPosts}