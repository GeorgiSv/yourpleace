import { Component } from "react";

import SingleArticle from './SingleArticle.js'
import moviesService from '../../services/dailyArticlesGetter.js'

class Search extends Component {
    constructor() {
        super()
        this.state = { query: "",
                       results:[],
                       error: ""
                    }

        this.onChangeSearch = this.onChangeSearch.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChangeSearch(event){
        let query = event.target.value;
        this.setState({query})
    }

    onSubmit(event){
        event.preventDefault()

        if (this.state.query === "" || this.state.query.length < 3) {
            this.setState({error: "Search query should ncontains at least 3 letters"})
            return;
        }

        moviesService.search(this.state.query)
        .then(res => {
            console.log(res)
            this.setState(() => ({results: res.results}))
        });
    }

    render() {

        if (!(this.state.results === [])) {
           
            return (<section >
    <h1 className="error">{this.state.error}</h1>
                <form onSubmit={this.onSubmit}>
                    <input type="text"
                        name="query"
                        value={this.state.query}
                        onChange={this.onChangeSearch}></input>
    
                    <button tpye="submit">Search</button>
                </form>
    
                <article >
                { 
                     this.state.results.map(a => <SingleArticle key={a.id} article={a}/>)
                }    
                </article>
            </section>);
        }
        return (<section >
            <h1 className="error">{this.state.error}</h1>
            <form onSubmit={this.onSubmit}>
                <input type="text"
                    name="query"
                    value={this.state.query}
                    onChange={this.onChangeSearch}></input>

                <button tpye="submit">Search</button>
            </form>

        </section>);
    }
}

export default Search