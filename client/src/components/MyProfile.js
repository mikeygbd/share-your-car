import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { connect } from 'react-redux'
import CarCard from './CarCard'
import BookingCard from './BookingCard'
import ReservationCard from './ReservationCard'
import Toolbar from '@material-ui/core/Toolbar';



const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
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
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={currentUser.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {currentUser.firstname} {currentUser.lastname}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {currentUser.hometown.city}, {currentUser.hometown.state}<br />
            {currentUser.hometown.country}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button label='CarForm'  to='/car_form' component={Link}  size="small" color="primary">
          Share Your Car
        </Button>
      </CardActions>
    </Card>
    </div>

    <div>
    <div className="UserForm-mc profile-panels">
    <div className="UserForm-title-mc1">
      <Toolbar>My Cars</Toolbar>
    </div>
    {carCards}
    </div>

    <div className="UserForm-mc profile-panels">
    <div className="UserForm-title-mc">
      <Toolbar>My Bookings</Toolbar>
    </div>
    {bookingCards ? bookingCards : <h3>No Bookings At This Time</h3>}
    </div>

    <div className="UserForm-mc profile-panels">
    <div className="UserForm-title-mc">
      <Toolbar>My Reservations</Toolbar>
    </div>
    {reservationCards}
    </div>
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
