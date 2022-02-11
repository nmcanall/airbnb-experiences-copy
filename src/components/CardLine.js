import Card from "./card/Card";
import data from "../data";

function CardLine() {

    var dataElements = data.map(item => {
        return <Card
            key={item.id}
            item={item}
        />
    });

    return (
        <div className="card-line">
            {dataElements}
        </div>
    )
}

export default CardLine;