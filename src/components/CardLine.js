import Card from "./card/Card";
import katie from "../styles/images/katie.png";
import wedding from "../styles/images/wedding.png";
import mountainBike from "../styles/images/mountain-bike.png";

function CardLine() {
    return (
        <div className="card-line">
            <Card
                img={katie}
                rating="5.0"
                numRatings="6"
                country="USA"
                desciption="Life lessons with Katie Zaferes"
                cost="136"
            />
            <Card
                img={wedding}
                rating="5.0"
                numRatings="30"
                country="USA"
                desciption="Learn wedding photography"
                cost="125"
            />
            <Card
                img={mountainBike}
                rating="4.8"
                numRatings="2"
                country="USA"
                desciption="Group Mountain Biking"
                cost="50"
            />
        </div>
    )
}

export default CardLine;