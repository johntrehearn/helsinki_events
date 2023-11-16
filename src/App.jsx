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
  const [search, setSearch] = useState("");
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Atte Party",
      date: "24.11.2023",
      hour: "19:00",
      area: "Pasila kaupunki",
    },
    {
      id: 2,
      name: "Thien Party",
      date: "01.1.2024",
      hour: "17:00",
      area: "Business College",
    },
    {
      id: 3,
      name: "John Party",
      date: "31.12.2025",
      hour: "11:00",
      area: "Vallila",
    },
  ]);

  const event = useFetch("https://api.hel.fi/linkedevents/v1/event/");

  console.log(event.data);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <>
      <Header />
      <Banner onchange={handleSearch} />
      <CategorySection />
      <CardsBucket events={events} onOpen={() => setIsOpen(true)} />
      <EventModal open={isOpen} onClose={() => setIsOpen(false)} />
      <Footer />
    </>
  );
}

export default App;
