import './style.css';

const DisplayCount = (props) => {
    return(

        <div className="count-container">

            {props.likeCount > 0  && ( 
            
                <div className="like-count">
                    👍 {props.likeCount}
                </div> 
            )}
            {props.commentCount > 0 && (
                <div className="comment-count">
                    💬 {props.commentCount}
                </div>
            )}


        </div>

        
    );
}

export default DisplayCount;