import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, CardMedia, Avatar, CardHeader, CardActionArea, Button, CardActions, Typography, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import CarCard from './CarCard'
import BookingCard from './BookingCard'
import ReservationCard from './ReservationCard'



const useStyles = makeStyles({
  card: {
    width: 1200,
    backgroundColor: "#ccc",
  },
  media: {
    height: 350,
  },
  share: {
    marginLeft: 515,
  },
  avatar: {
    width: 200,
    height: 200,

    backgroundColor: 'white',
    marginTop: 30,
    marginLeft: 490,
  },

});

const MyProfile = ({myCars, currentUser, myReservations, myBookings}) => {
  const carCards = myCars.length > 0 ? myCars.map(c => <CarCard car={c} key={c.id}/>) : null
  const reservationCards = myReservations.length > 0 ? myReservations.map(r => <ReservationCard reservation={r} key={r.id}/>) : null
  const bookingCards = myBookings.length > 0 ? myBookings.map(b => <BookingCard booking={b} key={b.id}/>) : null


  const classes = useStyles();

  return (
    <div className="user-profile">
      <div className="user-card">
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image="https://wallpaperaccess.com/full/124088.jpg"
            />
          <Avatar aria-label="Owner Img" className={classes.avatar}>
            <img className="profile-img"  src={currentUser.img} alt="Profile Pic"/>
          </Avatar>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {currentUser.firstname} {currentUser.lastname}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {currentUser.hometown.city}, {currentUser.hometown.state}<br />
            {currentUser.hometown.country}
          </Typography>
          <CardActions>
            <Button className={classes.share} label='CarForm'  to='/car_form' component={Link}  size="small" variant="contained" color="primary">
              Share Your Car
            </Button>
          </CardActions>
        </CardContent>
        <div>
          {carCards ?
            <div className="UserForm-mc profile-panels">
              <div className="UserForm-title-mc1">
                <Toolbar>My Cars</Toolbar>
              </div>
              {carCards}
            </div> : null}
            {bookingCards ?
              <div className="UserForm-mc profile-panels">
                <div className="UserForm-title-mc2">
                  <Toolbar>My Bookings</Toolbar>
                </div>
                {bookingCards}
              </div> : null}
              {reservationCards ?
                <div className="UserForm-mc profile-panels">
                  <div className="UserForm-title-mc">
                    <Toolbar>My Reservations</Toolbar>
                  </div>
                  {reservationCards}
                </div>: null}
              </div>
            </Card>
          </div>
        </div>
  )
}

const mapStateToProps = ({currentUser, myCars, myReservations, myBookings}) => {
  return {
    currentUser,
    myReservations,
    myBookings,
    myCars
  }
}

export default connect(mapStateToProps)(MyProfile)
