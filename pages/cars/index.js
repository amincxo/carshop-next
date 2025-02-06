import Categoryies from "../../components/module/Categoryies"
import SearchBar from "../../components/module/SearchBar"
import CarsPage from "../../components/templates/CarsPage"
import carsData from "../../data/carsData"

function Details() {
  return (
    <div>
        <SearchBar />
        <Categoryies />
        <CarsPage data={carsData} />
    </div>
  )
}

export default Details