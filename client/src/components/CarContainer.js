import React from 'react';
import Car from './Car';
import { connect } from 'react-redux'

function CarContainer({ match, cars}) {
  let id = +match.params.carId.replace((/car_/), "")
  let car;
  if (cars.length > 0 && cars.find(car => car.id === id)) {
    car = cars.find(car => car.id === id)
    return <Car car={ car } />
  }  else {
    return ""
  }
}

const mapStateToProps = state => {
  return {
    cars: state.cars
  }
}

export default connect(mapStateToProps)(CarContainer);
