import './style.css';
import pic from '../../images/pic.jpg';
import pic2 from './../../images/pic2.jpeg';
import pic3 from './../../images/pic3.jpeg';
import pic4 from './../../images/pic4.jpeg';


const PostCard = () => {
    const currentDate = new Date();
    const images =[
        pic,
        pic2,
        pic3,
        pic4,
        pic
    ];
    return(
        <div className="post-container">
            <div className="post-row">
                <div className="display-pic">
                    <img src={pic} alt="display pic" />
                </div>
                <div className="display-name">
                    <h3>Muhammad Laraib Merchant</h3>
                    <div className="display date">
                        <p>{currentDate.getDate() + " " + currentDate.getFullYear()}</p>
                    </div>
                </div>
            </div>
            <div className="post-row">
                <div className="display-text">
                    <p>My Name is Muhammad Laraib Merchant</p>
                </div>
            </div>
            <div className="post-row">
                <div className="image-container">
                    {images.slice(0, 4).map((image, index) => (
                    <div key={`image-${index}`} className="image-wrapper">
                        <img src={image} alt={`Img-${index}`} />
                    {index === 3 && images.length > 4 && (
                    <div className="more-images">
                        +{images.length - 4} more
                    </div>
                    )}
                    </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default PostCard;