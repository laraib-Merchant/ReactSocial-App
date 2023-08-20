import { useState } from 'react';
import './style.css';
import DisplayCount from '../displaycount/DisplayCount';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp} from '@fortawesome/free-solid-svg-icons';



const Button = () => {

    const [likeCount, setLikeCount] = useState(0);
    const [commentCount, setCommentCount] = useState(0);
    const likeCounterHandler = () => {
        setLikeCount(likeCount+1);
    }

    const commentCounterHandler = () => {
        setCommentCount(commentCount+1);
    }
    

    return(
        <>
            <DisplayCount likeCount={likeCount} commentCount={commentCount} />
            <div className="button-container">
                <button className="button-like" onClick={likeCounterHandler}><FontAwesomeIcon icon={faThumbsUp} /> Like</button>
                <button className="button-comment" onClick={commentCounterHandler}>Comment</button>
                <button className="button-share">Share</button>
            </div>
        </>
    )
}

export default Button;