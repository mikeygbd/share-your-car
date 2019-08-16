import React from 'react'
import CarCard from './CarCard'
import { connect } from 'react-redux'
import {deleteOwnerCar} from '../actions/myCars';



const MyCars = ({ myCars, currentUser}) => {

// console.log(myCars)
  const deleteOwnerCar = (id) => {
       myCars.filter(car => {
       return car.id !== id
     })

  }




  // renderTodos = () => this.props.todos.map((todo, id) => <Todo delete={this.props.delete} key={id} text={todo} />)
  let carCards = myCars.length > 0 ? myCars.map(c => <CarCard deleteOwnerCar={deleteOwnerCar(c.id)} car={c} key={c.id}/>) : null

  return (
    <div className="MyCars">

     {carCards}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    myCars: state.myCars,
    currentUser: state.currentUser

  }
}



export default connect(mapStateToProps, {deleteOwnerCar})(MyCars)
