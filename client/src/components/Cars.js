import React from 'react'
import CarCard from './CarCard'
import VehicleCard from './VehicleCard'
import { connect } from 'react-redux'
import Search from './Search';


const Cars = ({ cars, reviews}) => {
  const [filterText, setFilterText] = React.useState({
    filterText: ''

  })
  const [filterMake, setFilterMake] = React.useState({
    filterMake: ''
  })

  const filterUpdate = (value) => {
    setFilterText({
      filterText: value
    })
  }
  const filterUpdateMake = (value) => {
    setFilterMake({
      filterMake: value
    })
  }

console.log(filterMake)
  const carCards = cars.length > 0 ? cars
  .map(c => <CarCard car={c}  key={c.id}/>) : null
  return (
    <div>
    <div className="searchBar">
    <Search cars={cars} filterText={filterText} filterUpdateMake={filterUpdateMake.bind()} filterUpdate={filterUpdate.bind()}/>
    </div>
    <div className="Cars">
     {carCards}
     </div>
     </div>
  )
}

const mapStateToProps = state => {
  return {
    cars: state.cars,
    reviews: state.reviews
  }
}

export default connect(mapStateToProps)(Cars)
