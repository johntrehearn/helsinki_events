import Card from "./Card";
import "../styles/cardsBucket.css";

function CardsBucket({ events, onOpen, data }) {
  return (
    <div className="eventCards">
      <h2>EVENTS</h2>
      <div className="eventCardsBucket">
        <div>
          {events.map((event) => (
            <Card
              key={event.id}
              name={event.name}
              date={event.date}
              hour={event.hour}
              area={event.area}
              onOpen={onOpen}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardsBucket;
