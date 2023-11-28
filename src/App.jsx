import { useEffect, useState } from "react";
import EventModal from "./components/EventModal";
import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./components/Banner";
import CategorySection from "./components/CategorySection";
import CardsBucket from "./components/CardsBucket";
import useFetch from "./components/useFetch";
// import Map from "./components/Map";

function App() {
  const [isOpen, setIsOpen] = useState(false);
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
    const [area, setArea] = useState('');

    const fetchLocation = async () => {
      try {
        const response = await fetch(locationURL);
        if (!response.ok) {
          return;
        }
        const locationData = await response.json();
        const location = locationData.divisions.map(el => el.type === "neighborhood"? el.name.fi : '')
        setArea(location)
        
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(()=> {fetchLocation()}, [])

    return (
      <div>{area}</div>
    )
  }

  const handleSearch = (e) => setSearch(e.target.value);
  const filterSearch = () =>
    events.filter((elem) => {
      return (
        elem.name.toLowerCase().includes(search.toLowerCase()) ||
        elem.date.toLowerCase().includes(search.toLowerCase()) ||
        elem.area.toLowerCase().includes(search.toLowerCase())
      );
    });
  console.log(filterSearch());

  const url = "https://api.hel.fi/linkedevents/v1/event/?days=7";
  const data = useFetch(url);
  if (data.isLoading) return;
  if (data.isError) return <h2>There was an error...</h2>;

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
        onOpen={() => setIsOpen(true)}
      />
      <EventModal
        getArea={getArea}
        data={data.data}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <Footer />
    </>
  );
}

export default App;
