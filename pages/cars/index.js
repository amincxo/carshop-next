import Categoryies from "../../components/module/Categoryies"
import CarsPage from "../../components/templates/CarsPage"
import carsData from "../../data/carsData"

function Details() {
  return (
    <div>
        <Categoryies />
        <CarsPage data={carsData} />
    </div>
  )
}

export default Details