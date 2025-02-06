
import Categoryies from "../components/module/Categoryies";
import SearchBar from "../components/module/SearchBar";
import CarsPage from "../components/templates/CarsPage";
import carsData from "../data/carsData";

function Index() {
  const cars = carsData.slice(0,3)

  return (
    <div>
      <SearchBar />
      <Categoryies />
      {/* <AllButton /> */}
      <CarsPage data={cars} />
    </div>
  );
}

export default Index;
