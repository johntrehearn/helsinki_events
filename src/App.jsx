import { useState } from "react";
import EventModal from "./EventModal";
import Header from "./Header";
import Footer from "./footer";
import Banner from "./Banner";
import CategorySection from "./CategorySection";
import CardsBucket from './CardsBucket'
import useFetch from './useFetch'

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
