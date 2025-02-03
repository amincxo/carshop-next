import {useRouter } from 'next/router';
import carsData from '../../data/carsData';
import Card from '../../components/module/Card';

function CarDetail() {
    const router = useRouter();
    const {carID} = router.query || {};
    const CarDetail = carsData[carID -1]
    
  return (
    <div>CarDetail</div>
  )
}

export default CarDetail