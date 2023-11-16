import Card from "./Card"
import '../styles/cardsBucket.css'

function CardsBucket({events}) {

    


    return (
        <div className="eventCards">
        <h2>EVENTS</h2>
        <div className="eventCardsBucket">
            <div>
            {events.map((event)=> (
                <Card key={event.id} name={event.name} date={event.date} hour={event.hour} area={event.area}/>
)) }</div>
        </div>
        </div>
    )
}

export default CardsBucket;