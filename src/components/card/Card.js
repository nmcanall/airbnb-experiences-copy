import star from "../../styles/images/star.png";

function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="card-img" alt="activity preview"/>
            <div className="details">
                <img src={star} className="star" alt="Simple star icon"/>
                <p className="rating">{props.rating}</p>
                <p className="grey-text num-ratings">{props.numRatings}</p>
                <p className="ellipse grey-text">•</p>
                <p className="grey-text country">{props.country}</p>
            </div>
            <p>{props.description}</p>
            <p><span style={{fontWeight: "bold"}}>From ${props.cost}</span> / person</p>
        </div>
    )
}

export default Card;