import { useEffect, useState } from "react";
import EventModal from "./components/EventModal";
import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./components/Banner";
import CategorySection from "./components/CategorySection";
import CardsBucket from "./components/CardsBucket";
import Sidebar from "./components/Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalEventData, setModalEventData] = useState(null);
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState(
    "https://api.hel.fi/linkedevents/v1/event/?days=7"
  );
  const [events, setEvents] = useState([]);
  const [area, setArea] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEvents(data.data)); //data.next gives next 20 events
  }, [url]);

  // console.log(`URL state: ${url}`);

  // update url state
  const updateURL = (url) => setUrl(url);

  // update state for search onChange
  const handleSearch = (e) => setSearch(e.target.value);

  // find matching data between card and modal
  const getDataForModal = (id) =>
    setModalEventData(events.find((el) => el.id === id));

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

  // a function fetch location url and set location in state
  function getArea(locationURL) {
    const fetchLocation = async (locationURL) => {
      try {
        const response = await fetch(locationURL);
        if (!response.ok) {
          return;
        }
        const locationData = await response.json();
        const location = locationData.divisions.map((el) =>
          el.type === "neighborhood" ? el.name.fi : ""
        );
        return location;
      } catch (error) {
        console.log(error);
      }
    };

    const promise = fetchLocation(locationURL);
    promise.then(
      (result) => {
        setArea(result[3]);
      },
      (error) => {
        console.log(`There is an error: ${error}`);
      }
    );
  }

  return (
    <>
      <Header />
      <Banner onchange={handleSearch} updateURL={updateURL} />
      <CategorySection />
      <Sidebar />
      <CardsBucket
        getTime={getTime}
        getDate={getDate}
        // getArea={getArea}
        data={events}
        getDataForModal={getDataForModal}
        onOpen={() => setIsOpen(true)}
        search={search}
      />
      <EventModal
        getTime={getTime}
        getDate={getDate}
        getArea={getArea}
        area={area}
        data={modalEventData}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        updateURL={updateURL}
      />
      <Footer />
    </>
  );
}

export default App;
