import { useState } from "react";
import EventModal from "./EventModal";
import Header from "./Header";
import Footer from "./footer";
import Banner from "./Banner";
import Map from "./Map";
import CategorySection from "./CategorySection";

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
      <EventModal />
      <Map />
      <Footer />
    </>
  );
}

export default App;
