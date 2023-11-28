import { useState } from "react";
import EventModal from "./components/EventModal";
import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./components/Banner";
import CategorySection from "./components/CategorySection";
import CardsBucket from "./components/CardsBucket";
import useFetch from "./components/useFetch";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalEventData, setModalEventData] = useState(null);
  const [search, setSearch] = useState("");
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Atte Party",
      date: "Nov, 24, 2023",
      hour: "19:00",
      area: "Pasila kaupunki",
    },
    {
      id: 2,
      name: "Thien Party",
      date: "Jan, 1, 2024",
      hour: "17:00",
      area: "Business College",
    },
    {
      id: 3,
      name: "John Party",
      date: "Dec, 31, 2024",
      hour: "11:00",
      area: "Vallila",
    },
  ]);

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

  //a function fetch location url and return location in string
  function getArea(locationURL) {
    let location;
    const fetchArea = async () => {
      try {
        const response = await fetch(locationURL);
        if (!response.ok) {
          return;
        }
        location = await response.json();
        // console.log(location.id);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArea();
    // console.log(location);
    return location;
  }

  const url = "https://api.hel.fi/linkedevents/v1/event/?days=7";
  const data = useFetch(url);
  if (data.isLoading) return;
  if (data.isError) return <h2>There was an error...</h2>;

  const handleSearch = (e) => setSearch(e.target.value);
  const filterSearch = () =>
    events.filter((elem) => {
      return (
        elem.name.toLowerCase().includes(search.toLowerCase()) ||
        elem.date.toLowerCase().includes(search.toLowerCase()) ||
        elem.area.toLowerCase().includes(search.toLowerCase())
      );
    });
  // console.log(filterSearch());

  const getDataForModal = (id) => {
    const modalData = data.data.filter((el) => el.id === id);
    setModalEventData(modalData[0]);
  };

  return (
    <>
      <Header />
      <Banner onchange={handleSearch} />
      <CategorySection />
      <CardsBucket
        getTime={getTime}
        getDate={getDate}
        getArea={getArea}
        data={data.data}
        getDataForModal={getDataForModal}
        onOpen={() => setIsOpen(true)}
      />
      <EventModal
        getTime={getTime}
        getDate={getDate}
        getArea={getArea}
        data={modalEventData}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <Footer />
    </>
  );
}

export default App;
