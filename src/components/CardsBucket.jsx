import Card from "./Card";
import "../styles/cardsBucket.css";
import useFetch from "./useFetch";

function CardsBucket({ events, onOpen, data, getArea }) {
  console.log(data);
  console.log(events);

  //A function change the format of date to "dd-mm-yyyy"
  function modifyDate(dateStr) {
    if (dateStr == null || dateStr.length == 0) {
      return "";
    } else {
      let year = dateStr.slice(0, 4);
      let month = dateStr.slice(4, 8);
      let date = dateStr.slice(8, 10);
      let newDateStr = date.concat(month, year);
      return newDateStr;
    }
  }

  // a function check and return DATE of event
  function getDate(startDateStr, endDateStr) {
    let newDate;
    let newStartDateStr = modifyDate(startDateStr);
    let newEndDateStr = modifyDate(endDateStr);

    if (newEndDateStr === newStartDateStr || newEndDateStr.length == 0) {
      newDate = newStartDateStr;
      return newDate;
    } else {
      newDate = `${newStartDateStr} to ${newEndDateStr}`;
      return newDate;
    }
  }

  //a function check and return TIME of event
  function getTime(startDateStr, endDateStr) {
    let startTime;
    let endTime;
    let time;

    if (endDateStr == null && startDateStr == null) {
      time = "";
      return time;
    } else if (modifyDate(startDateStr) === modifyDate(endDateStr)) {
      startTime = startDateStr.slice(11, 16);
      endTime = endDateStr.slice(11, 16);
      time = ` ${startTime}-${endTime}`;
      return time;
    } else if (startDateStr != null && endDateStr == null) {
      startTime = startDateStr.slice(11, 16);
      time = ` ${startTime}`;
      return time;
    }
  }

  /*  function getArea(locationURL) {
    const data = useFetch(locationURL);

    if (data.isLoading) {
      return <h2>Loading ...</h2>
    } 

    if (data.isError) {
      return <h2>There was an error ...</h2>
    }

    let area = data.id;
    console.log(area);

    return (data.id)
  } */

  return (
    <div className="eventCards">
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
