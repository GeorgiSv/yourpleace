import { Component } from 'react';

class NotFound extends Component {

   
    render() {
        const style = {
            color: "red"
        }
        
        return (
         <h1 style={style}>Sorry but we dit not found what you searched for :( </h1>
        );
    }
}

export default NotFound