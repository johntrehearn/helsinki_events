
import Header from './Header'
import Footer from './footer'
import Banner from './Banner'
import CategorySection from './CategorySection'
import useFetch from './useFetch'

function App() {
  const event = useFetch("https://api.hel.fi/linkedevents/v1/event/");

  console.log(event.data);

  return (
    <>
      <Header/>
      <Banner />
      <CategorySection />
      <Footer/>
    </>
  )
}

export default App;
