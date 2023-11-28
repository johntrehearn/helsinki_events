import Card from "./Card";
import "../styles/cardsBucket.css";
import useFetch from "./useFetch";

function CardsBucket({  onOpen, data, getArea, getDate, getTime }) {
  console.log(data);

  return (
    <div className="cardsBucket">
      <h2>EVENTS</h2>
      <div className="eventCardsBucket">
        <div>
          {data.map((event) => (
            <Card
            key={event.id}
            name={event.name.fi}
            date={getDate(event.start_time, event.end_time)}
            time={getTime(event.start_time, event.end_time)}
            // area={event.location["@id"]}
            onOpen={onOpen}
            />
            ))}
        </div>
      </div>
    </div>
  ); //end of return
}

export default CardsBucket;
