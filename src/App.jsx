import { useState } from "react";
import EventModal from "./EventModal";
import Header from "./Header";
import Footer from "./footer";
import Banner from "./Banner";
import CategorySection from "./CategorySection";
import CardsBucket from './CardsBucket'


function App() {
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
