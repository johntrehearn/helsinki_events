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
      <Header onchange={handleSearch} />
      <Banner />
      <CategorySection />
      <EventModal />
      <Map />
      <Footer />
    </>
  );
}

export default App;
