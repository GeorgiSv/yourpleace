import { Link } from 'react-router-dom';
import "./Post.css"

function ShortPost(props){

        return (
            <article className="post center-post">
                    <h2>{props.post.title}</h2>
                        <p>{props.post.datetime}</p>
                <div className="forum-feed-buttons">
                        <Link to={"/forum/post/" + props.post.id}>
                            Check
                        </Link>

                        <button>
                            Delete
                        </button>
                    </div>
            </article>
        );
}

export default ShortPost