import React, {useState} from 'react'
import ReviewCard from './ReviewCard'
import {useSelector, useAction} from 'react-redux'
import {deleteMyCar} from '../actions/myCars'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import StarRatingComponent from 'react-star-rating-component';
import { makeStyles } from '@material-ui/core/styles';
import {CssBaseline, Typography, Container, Card, CardActionArea, CardMedia, Button, Avatar, GridListTile, GridListTileBar, CardContent  } from '@material-ui/core';


const useStyles = makeStyles({
card : {
  width: 645,
  height: "100%",
  marginLeft: 320
},
avatar: {
  backgroundColor: 'white' [500],
  marginLeft: 30
},
gridList: {
  width: 500,
  height: 450
},
gtile: {
  backgroundColor: "black"
},
ownerInfo: {
  textAlign: "left"
},
reviews: {
  maxWidth: 300
}
});


const Car = ({car, reviews}) => {

  const classes = useStyles();

  const title = `${car.make} ${car.model}`

  const [showReviews, setShowReviews] = useState(false)

  var filteredArray = reviews.filter(function(review) {
    return review.car.id === car.id
  });

  var totalRating = 0;

  var ratings = []

  filteredArray.forEach(avrgRating)

  function avrgRating(review) {
    ratings.push(review.rating)
    totalRating += review.rating;
  }
  var avg = totalRating / ratings.length;

  const reviewCards = filteredArray.length > 0 ? filteredArray.map((rw) => <ReviewCard review={rw} key={rw.id}/>) : null

  const toggleReviews = (e) => {
    setShowReviews(prevShowReviews => !prevShowReviews)

  }

  return (
    <div className = "Car" > <Card className={classes.card}>

  <GridListTile className={classes.gtile}>
    <div className="carImgContainer">
      <div className="star-rate">
        <StarRatingComponent name="rate2" editing={false} starCount={5} value={avg}/>
      </div>

      <Button variant="contained" to="/create_reservation" component={Link} size="small" color="primary" className="daily-rate">
        ${car.daily_rate}/Day
      </Button>

      <CardMedia
        className={classes.img}
        component="img"
        alt={title}
        height="340"
        image={car.img}
        title={title}
        />
    </div>
    <GridListTileBar
      title={title}
      subtitle={car.year}
      />
  </GridListTile>

  <CardContent>

    <div className="description">
      {reviewCards ?
        <Button color="primary" onClick={toggleReviews} aria-label="Share">
          { showReviews ? "Hide Reviews" : "Show Reviews" }
        </Button> : null }
          { showReviews ?
        <div className={classes.reviews}>
          {reviewCards}
        </div>  : null }
    </div>

    <div className="ownerInfo">
      <Avatar aria-label="Owner Img" className="avatar" image={car.owner.img}>
        <img className="owner-img" src={car.owner.img} alt="Profile Pic"/>
      </Avatar>
      <Typography className={classes.ownerInfo} variant="body2" color="textSecondary" component="p">
        <strong>Owner:</strong> {car.owner.firstname} {car.owner.lastname}<br/>

        <strong>Location:</strong> {car.location.city}, {car.location.state}, {car.location.country}<br/>

        <strong>Weekly Discount:</strong> {car.weekly_discount}%<br/>

        <strong>Monthly Discount:</strong> {car.monthly_discount}%<br/>

        <strong>Type:</strong> {car.car_type}<br/>

        <strong>Seats:</strong> {car.total_passengers}<br/>
        
        <strong>Description:</strong> {car.description}<br/>

      </Typography>
    </div>
  </CardContent>

</Card>

</div>
  )
}

const mapStateToProps = state => {
  return {

    reviews: state.reviews,


  }
}


export default connect(mapStateToProps)(Car)
