import * as firebase from '../../services/firebase.js'

export default function(){
    var result = {
        uid: "",
        email: "",
    }

    firebase.auth.onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          localStorage.setItem('uid', user.uid)
          localStorage.setItem('email',user.email)
          localStorage.setItem('isLogged', true)

          result.uid = user.uid;
          result.email = user.email;
        } else {
          // User is signed out.
          localStorage.clear();
        }
      });
  
      return result;
  }
  