import React from 'react';
import './App.css';
import Login from './components/Login'
import Logout from './components/Logout'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'


class App extends React.Component {


  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
  return (

      this.props.currentUser ? <Logout/> : <Login/>

    );
  }
}

  const mapStateToProps = ({currentUser}) => {
    return {
      currentUser
    }
  }

export default connect(mapStateToProps, {getCurrentUser})(App);
