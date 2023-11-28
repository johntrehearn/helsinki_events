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
        console.log(location.id);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArea();
    console.log(location);
    return location;
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
        getArea={getArea}
        data={data.data}
        getDataForModal={getDataForModal}
        onOpen={() => setIsOpen(true)}
      />
      <EventModal
        data={modalEventData}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <Footer />
    </>
  );
}

export default App;
