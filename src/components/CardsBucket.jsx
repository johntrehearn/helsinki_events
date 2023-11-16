import Card from "./Card"
import '../styles/cardsBucket.css'

function CardsBucket() {
    return (
        <div className="eventCards">
        <h2>EVENTS</h2>
        <div className="eventCardsBucket">
            <div><Card /></div>
            <div><Card /></div>
            <div><Card /></div>
        </div>
        </div>
    )
}

export default CardsBucket;