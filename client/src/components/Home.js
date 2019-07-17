import React from 'react'
import logo from '../images/white_transparent_1.png';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const useStyles = makeStyles({
  share: {

    // backgroundColor: "rgb(33 120 207)",
    // color: "#eee",
  },
});

const Home = ({ currentUser }) => {
  const classes = useStyles();

  return (

    <div className="Home">
        <div className="welcome-card">
          <div className='welcome-msg'>Welcome To</div>
          <div><img src={logo} alt="Logo" width="300"/></div>
          <div className='welcome-sub-msg'>Let Your Car Work For You!</div><br />
            {currentUser ?
            <Button className={classes.share} label='CarForm'  to='/car_form' component={Link}  size="small" variant="contained" color="primary">
              Share Your Car
            </Button>: null}
        </div>
      </div>

  )
}
const mapStateToProps = ({currentUser}) => {
  return {
    currentUser,

  }
}

export default connect(mapStateToProps)(Home)
