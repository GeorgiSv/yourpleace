import * as firebase from './firebase.js'


function addPost(data){
        return firebase.db.collection('forumposts').add(data)
}

function getAllPosts(){
    return firebase.db.collection('forumposts').get()
}

function getPost(id){
    return firebase.db.collection('forumposts').doc(id).get()
}

function addComment(data){
    return firebase.db.collection('forumposts').doc(data.id).update(data)
}

function updatePost(data){
    return firebase.db.collection('forumposts').doc(data.id).update(data)
}



export { addPost, 
    getAllPosts,
    getPost,
    addComment,
    updatePost,
 }