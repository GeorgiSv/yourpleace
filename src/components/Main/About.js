import { Component } from "react";

class About extends Component{
    constructor(){
        super()

    }

    render(){

        const style = {
            color: "white",
            backgroundColor: "#fbfbfb30",
            heigh: "600px",
            padding: 30,
        }

        const headingStyle = {
            fontSize: 24,
            margin: 0,
            textAlign: "center",
            textDecoration: "underline",

        }

        const spanStyle ={
            color: "#2AFCDD"
        }

        const creditsStyle = {
            color: "gold"
        }

        return (<section style={style} className="about section-wrapper">
            <h2 style={headingStyle}>About</h2>
            <article>
                <h1>What is this? </h1>
                <p>This is students project for REactJS SoftUni's course. It's meant for ONLY public defence purpose.</p>
                <h1>For what is that? </h1>
                <p>This is <span style={spanStyle}>YOURPLACE</span> !  The place whe you canscroll for different movie informaiton content, ask questions or share stories. Really, this is just <span style={spanStyle}>YOURPLACE</span> </p>
                <h1>How is it possible?</h1>
                <p>It's possible beacuse of the COOL guys from <span style={creditsStyle}>TMDB &copy;(The Movie Database) guys!</span> BIG thanks for all the free content provided for this educational purpose. Don't wait! Just check them out here <a style={{color: "blue"}} href='https://www.themoviedb.org/'>www.themoviedb.org/</a> </p>
            </article>
        </section>);
    }
}

export default About