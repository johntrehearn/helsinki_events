import Card from "./Card"
import '../styles/cardsBucket.css'

function CardsBucket({events}) {
    return (
        <div className="eventCards">
        <h2>EVENTS</h2>
        <div className="eventCardsBucket">
            <div><Card events={events}/></div>
        </div>
        </div>
    )
}

export default CardsBucket;