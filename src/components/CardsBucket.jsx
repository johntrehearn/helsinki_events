import Card from "./Card";
import "../styles/cardsBucket.css";

function CardsBucket({
  search,
  onOpen,
  data,
  getDate,
  getTime,
  getDataForModal,
}) {
  // console.log(data);

  return (
    <div className="cardsBucket">
      <h2>EVENTS</h2>
      <div className="eventCardsBucket">
        {data
          .filter((elem) => {
            return (
              elem.name?.fi?.toLowerCase().includes(search.toLowerCase()) ||
              elem.name?.en?.toLowerCase().includes(search.toLowerCase()) ||
              elem.name?.sv?.toLowerCase().includes(search.toLowerCase()) ||
              elem.description?.fi
                ?.toLowerCase()
                .includes(search.toLowerCase()) ||
              elem.description?.en
                ?.toLowerCase()
                .includes(search.toLowerCase()) ||
              elem.description?.sv?.toLowerCase().includes(search.toLowerCase())
            );
          })
          .map((event) => (
            <Card
              key={event.id}
              id={event.id}
              name={event.name.fi}
              date={getDate(event.start_time, event.end_time)}
              time={getTime(event.start_time, event.end_time)}
              eventImgURL={event.images.map((image) => image.url)}
              onOpen={onOpen}
              getDataForModal={getDataForModal}
            />
          ))}
      </div>
    </div>
  ); //end of return
}

export default CardsBucket;
