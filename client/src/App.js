import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import { getCars } from './actions/cars'
import { getReviews } from './actions/reviews'
import NavBar from './components/NavBar'
import { Switch, Route, } from 'react-router-dom';
import MyCars from './components/MyCars'
import Cars from './components/Cars'
import Login from './components/Login'
import Logout from './components/Logout'
import Home from './components/Home'
import UserSignup from './components/UserSignup';
import Search from './components/Search';
import MyProfile from './components/MyProfile';
import CarForm from './components/CarForm';
import ReservationForm from './components/ReservationForm';
import ReviewForm from './components/ReviewForm';
import Reviews from './components/Reviews'
import About from './components/About'
import CarContainer from './components/CarContainer'





class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.getReviews()
    this.props.getCars()

  }


  render() {
  return (

    <div className="App">
    <NavBar/>
      <Switch>
        <Route path="/cars/car_:carId" render={props => <CarContainer {...props} cars={ this.props.cars } currentUser={ this.props.currentUser }/> } />
        <Route exact path='/about' render={props => <About {...props} />}  />
        <Route exact path='/my_cars' render={props => <MyCars {...props} />}  />
        <Route exact path='/create_reservation' render={props => <ReservationForm {...props} />}  />
        <Route exact path='/create_review' render={props => <ReviewForm {...props} />}  />
        <Route exact path='/cars' render={props => <Cars {...props} />}  />
        <Route exact path='/reviews' render={props => <Reviews {...props} />}  />
        <Route exact path='/login' render={props => <Login {...props} />}  />
        <Route exact path='/logout' render={props => <Logout {...props} />}  />
        <Route exact path='/signup' render={props => <UserSignup {...props} />}  />
        <Route exact path='/search' render={props => <Search {...props} />} />
        <Route exact path='/my_profile' render={props => <MyProfile {...props} />}  />
        <Route exact path='/car_form' render={props => <CarForm {...props} />}  />
        <Route exact path='/cars/:id/destroy' render={props => <MyCars {...props} />}  />

        <Route component={Home} />
      </Switch>
    </div>


    );
  }
}

const mapStateToProps = (state) => {
  return {
      cars: state.cars,

    }
}


export default connect(null, {getCurrentUser, getCars, getReviews })(App);
