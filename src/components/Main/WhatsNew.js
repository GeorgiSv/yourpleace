import { Component } from "react";
import * as userService from '../../services/usersService'
//import {db} from '../../services/firebase'

class WhatsNew extends Component{
    constructor(){
        super()

    }

    render(){

        const style = {
            color: "white",
            backgroundColor: "#fbfbfb30",
            heigh: "600px",
            padding: 30,
            fontSize: 26
        }

        //let user = {username: "Bogi", email: "asd@asd.dsa", password:"asd"}
        // let movies = userService
        //         .addUserMovies(user)
        //         .then(res => console.log(res))
        //         .catch(e => console.log(e));

        let info = {}
        // let result = db.collection('users').get().then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         info = doc.data();
        //         console.log(`${doc.id} => ${doc.data().username}}`);
        //     });
        // });

        return (<section className="section-wrapper">
            <h1>WhatsNew page</h1>

            {/* {result} */}
        </section>);
    }
}

export default WhatsNew