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
  const [locationInfo, setLocationInfo] = useState({});

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEvents(data.data)); //data.next gives next 20 events
  }, [url]);

  // update url state
  const updateURL = (url) => setUrl(url);

  // update state for search onChange
  const handleSearch = (e) => setSearch(e.target.value);

  // find matching data between card and modal
  const getDataForModal = (id) =>
    setModalEventData(events.find((el) => el.id === id));

  // call getLocationInfo when modalEventData state is not null anymore
  useEffect(() => {
    if (modalEventData === null) return;
    getLocationInfo(modalEventData.location["@id"]);
  }, [modalEventData]);

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
    let startTimeInt;
    let endTimeInt;
    let startTime;
    let endTime;
    let time;

    if (endDateStr == null && startDateStr == null) {
      time = "";
      return time;
    } else if (modifyDate(startDateStr) === modifyDate(endDateStr)) {
      startTimeInt = parseInt(startDateStr.slice(11, 13)) + 2;
      startTime = `${startTimeInt}${startDateStr.slice(13, 16)}`;
      endTimeInt = parseInt(endDateStr.slice(11, 13)) + 2;
      endTime = `${endTimeInt}${endDateStr.slice(13, 16)}`;
      time = ` ${startTime}-${endTime}`;
      return time;
    } else if (startDateStr != null && endDateStr == null) {
      startTime = `${startTimeInt}:${startDateStr.slice(13, 16)}`;
      time = ` ${startTime}`;
      return time;
    }
  }

  // a function fetch location url and set location in state
  function getLocationInfo(locationURL) {
    const fetchLocation = async (locationURL) => {
      try {
        const response = await fetch(locationURL);
        if (!response.ok) return;

        const locationData = await response.json();

        const location = locationData.divisions.map((el) =>
          el.type === "neighborhood" ? el.name.fi : ""
        );

        const areaId = locationData.id.match(/(\d+)/);

        const locationInfo = {
          neighborhood: location[3],
          address: `${locationData.street_address.fi}, ${locationData.address_locality.fi}`,
          website: locationData.info_url.fi,
          mapURL: `${areaId[0]}?lat=${locationData.position.coordinates[0]}&lon=${locationData.position.coordinates[1]}`,
        };

        return locationInfo;
      } catch (error) {
        console.log(error);
      }
    };

    fetchLocation(locationURL).then(
      (locationInfo) => setLocationInfo(locationInfo),
      (error) => console.log(`There is an error: ${error}`)
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
        data={events}
        modalData={modalEventData}
        getDataForModal={getDataForModal}
        onOpen={() => setIsOpen(true)}
        search={search}
      />
      <EventModal
        getTime={getTime}
        getDate={getDate}
        modalData={modalEventData}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        locationInfo={locationInfo}
      />
      <Footer />
    </>
  );
}

export default App;
