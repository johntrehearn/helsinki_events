import { useState } from "react";
import EventModal from "./components/EventModal";
import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./components/Banner";
import CategorySection from "./components/CategorySection";
import CardsBucket from './components/CardsBucket'
import useFetch from './components/useFetch'

function App() {
  const event = useFetch("https://api.hel.fi/linkedevents/v1/event/");

  console.log(event.data);
  
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value);
  }


  return (
    <>
      <Header />
      <Banner onchange={handleSearch} />
      <CategorySection />
      <CardsBucket />
      <EventModal />
      <Footer />
    </>
  );
}

export default App;
