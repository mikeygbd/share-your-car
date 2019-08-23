import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {Card, CardContent, CardMedia, GridListTileBar, CardActions, CardActionArea, Collapse, Avatar, IconButton, Typography, Button,  } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link, withRouter } from 'react-router-dom';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { connect } from 'react-redux'
import '../styles/car.css'
import { updateCreateReservationForm } from '../actions/createReservationForm'
import ReviewCard from './ReviewCard'
import { deleteOwnerCar } from '../actions/myCars'
import { getMyCars } from '../actions/myCars'

import StarRatingComponent from 'react-star-rating-component';



const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: grey[400],
    width: 300,
    margin: 8,

  },
  stars: {
    paddingTop: 15,
  },
  tileBar: {
    height: 40,

  },
  cardHeader: {
    textAlign: 'left',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'white'[500],
  },
  iconHover: {
    margin: theme.spacing(2),
    '&:hover': {
      color: "red",
    },
  },

}))

const CarCard = ({ createReservationFormData, updateCreateReservationForm, history, myCars, car, deleteCar, filterCars, deleteOwnerCar, reviews, currentUser }) => {
  const classes = useStyles()
  // const deleteMyCar = useActions((carId) => deleteMyCarAction(carId))
   // const dispatch = useDispatch()
  const [showReviews, setShowReviews] = useState(false)

  var filteredArray = reviews.filter(function( review ) {
    return review.car.id === car.id});
    var totalRating = 0;
    var ratings = []
    filteredArray.forEach(avrgRating)
    function avrgRating(review) {
      ratings.push(review.rating)
      totalRating += review.rating;
    }
    var avg = totalRating / ratings.length;
  const reviewCards = filteredArray.length > 0 ? filteredArray.map((rw) =>  <ReviewCard review={rw} key={rw.id}/>) : null

  const [expanded, setExpanded] = React.useState(false)
  const title = `${car.make} ${car.model}`
  function handleExpandClick() {
    setExpanded(!expanded)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedFormInfo = {
      ...createReservationFormData,
      car: {
          id: car.id,
          make: car.make,
          model: car.model,
          year: car.year,
          img: car.img,
          daily_rate: car.daily_rate,
          weekly_discount: car.weekly_discount,
          monthly_discount: car.monthly_discount,
          description: car.description
      }
    }

    updateCreateReservationForm(updatedFormInfo)
    history.push('/create_reservation')
  }

  const toggleReviews = (e) => {
      setShowReviews(prevShowReviews =>
       !prevShowReviews
    )
  }

  const carLink = `/cars/car_${car.id}`

  return (
    <Card id="car-card" className={classes.card} >

      <CardActionArea  to={carLink} key={car.id}  component={Link} >

        <div className="carImgContainer">

          <div className="cc-star-rate">
            <StarRatingComponent
              className={classes.stars}
              name="rate2"
              editing={false}
              starCount={5}
              value={avg}
              size="small"
              aria-label="Settings"
              />
          </div>

          <div className="cc-daily-rate">
            {currentUser && (car.owner.id === currentUser.id) ?
              <Button variant="contained"size="small" color="primary">
                ${car.daily_rate}/Day
              </Button>
              :
              <Button variant="contained"  onClick={handleSubmit} size="small" color="primary">
                ${car.daily_rate}/Day
              </Button>
            }
          </div>
          <CardMedia
            className={classes.media}
            image={car.img}
            title= {title}
            alt={title}
            />
          <GridListTileBar
            className={classes.tileBar}
            title={title}
            subtitle={car.year}

            />
        </div>
      </CardActionArea>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <strong>Location:</strong> {car.location.city} {car.location.state}, {car.location.country}<br />
          {car.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {currentUser && (car.owner.email === currentUser.email) ?
          <IconButton aria-label="Delete Car" className={classes.iconHover}  onClick={ () => { if (window.confirm('Are you sure you wish to delete this car?'))  deleteOwnerCar(car.id) } } >
            <DeleteOutlinedIcon    />
          </IconButton>
          :
          <IconButton aria-label="Add to favorites" className={classes.iconHover}  >
            <FavoriteIcon />
          </IconButton>
        }
        {currentUser && (car.owner.email === currentUser.email) ?
          <Button label='MyCars' color="primary" to='/my_cars' component={Link}  aria-label="Share">
            My Car
          </Button>
          :
          <Button onClick={handleSubmit} color="primary"  aria-label="Share">
            Reserve
          </Button>}
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
            >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>

            <div className="cc-ownerInfo">
              <strong>Host</strong><br />
              <Avatar aria-label="Owner Img" className="cc-avatar" image={car.owner.img}>
                <img className="owner-img" src={car.owner.img} alt="Profile Pic"/>
              </Avatar>
              {car.owner.firstname}
            </div>
            <div classID="cc-info">
              <strong>Seats:</strong> {car.total_passengers}<br />
              <strong>Type:</strong> {car.car_type}<br />
              <strong>Weekly Discount:</strong><span className="percentage"> -{car.weekly_discount}% </span><br />
              <strong>Monthly Discount:</strong><span className="percentage"> -{car.monthly_discount}% </span><br />
            </div>

            <div className="reviews-btn">
              {reviewCards ?
                <Button color="primary" onClick={toggleReviews} aria-label="Share">
                  {showReviews ? "Hide Reviews" : "Show Reviews" }
                </Button> : null }
                { showReviews ?
                  <div>
                    {reviewCards}
                  </div>  : null}
                </div>
              </CardContent>
            </Collapse>
          </Card>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    createReservationFormData: state.createReservationForm,
    reviews: state.reviews,
    myCars: state.myCars
  }
}

export default withRouter(connect(mapStateToProps, { updateCreateReservationForm, getMyCars, deleteOwnerCar })(CarCard))
