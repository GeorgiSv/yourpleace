import { Component } from "react";
import './Body.css';
import nasaService from '../services/dailyArticlesGetter.js'
import SingleArticle from './SingleArticle.js'

class Body extends Component {

    constructor(props){
        super(props)

        this.state = { 
            weeklyArticles: [],
            dayilyArticles: []
        }
    }

    componentDidMount() {
        nasaService.getWeeklyTrendingArticles()
            .then(article =>{
                this.setState(() => ({weeklyArticles: article.results}))
            });

            nasaService.getDailyTrendindArticles()
            .then(article =>{
                this.setState(() => ({dayilyArticles: article.results}))
            });
    }

    render() {
     
        return (
            <div className='body-wrapper section-wrapper'>
                <main className=''>
                    {
                        this.state.weeklyArticles.map(a => <SingleArticle key={a.id} article={a}/>)
                    }
                    {
                        this.state.dayilyArticles.map(a => <SingleArticle key={a.id} article={a}/>)
                    }
                </main>
                <aside className='sidebar'>
                    <article className='side-top-wrapper'>
                        <ul className='sidebar-navigation'>
                            <li className='sidebar-navigation-element'>
                                <a href='#'>
                                    Trending movies
                                </a>
                            </li>
                            <li className='sidebar-navigation-element'>
                                <a href='#'>
                                     Weekly Trending movies
                                </a>
                            </li>
                            <li className='sidebar-navigation-element'>
                                <a href='#'>
                                    Daily Trending movies
                                </a>
                            </li>
                            <li className='sidebar-navigation-element'>
                                <a href='#'>
                                    Popular
                                </a>
                            </li>
                            <li className='sidebar-navigation-element'>
                                <a href='#'>
                                    Other 
                                </a>
                            </li>
                        </ul>
                    </article>
                    <article className='side-bottom-wrapper'>dsa</article>
                </aside>
            </div>
        );
    }
}

export default Body