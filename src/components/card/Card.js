import star from "../../styles/images/star.png";

function Card({item}) {
    console.log(item);
    let badgeText;
    if(item.openSpots === 0) {
        badgeText = "SOLD OUT";
    }
    else if (item.location === "Online") {
        badgeText = item.location;
    }

    return (
        <div className="card">
            {badgeText && <div className="badge">{badgeText}</div>}
            <img src={`./images/${item.coverImg}`} className="card-img" alt="activity preview"/>
            <div className="details">
                <img src={star} className="star" alt="Simple star icon"/>
                <p className="rating">{item.stats.rating}</p>
                <p className="grey-text num-ratings">({item.stats.reviewCount})</p>
                <p className="ellipse grey-text">•</p>
                <p className="grey-text country">{item.location}</p>
                
            </div>
            <p>{item.title}</p>
            <p><span style={{fontWeight: "bold"}}>From ${item.price}</span> / person</p>
        </div>
    )
}

export default Card;