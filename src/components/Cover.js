import { Component } from "react";
import coverPicture from '../universe-cover-photo.jpg'
import './Cover.css'

class Cover extends Component{

    render(){

        const headings = ["EXPLORE", "LEARN", "HAVE FUN"]

        return (
             <article className='header-cover'>
               {
                   headings.map((e, i) => <h1 key={i}>{e}!</h1>)
                }
            </article>
        );
    }
}

export default Cover