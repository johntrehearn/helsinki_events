import { useState } from "react";
import EventModal from "./components/EventModal";
import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./components/Banner";
import CategorySection from "./components/CategorySection";
import CardsBucket from "./components/CardsBucket";
import useFetch from "./components/useFetch";
import Map from "./components/Map";

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

  const url = "https://api.hel.fi/linkedevents/v1/event/?on_going/";
  const data = useFetch(url);
  if (data.isLoading) return;
  if (data.isError) return <h2>There was an error...</h2>;

  return (
    <>
      <Header />
      <Banner onchange={handleSearch} />
      <CategorySection />
      <CardsBucket
        data={data.data}
        events={events}
        onOpen={() => setIsOpen(true)}
      />
      <EventModal open={isOpen} onClose={() => setIsOpen(false)} />
      <Footer />
    </>
  );
}

export default App;
