import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { updateCreateReviewForm } from '../actions/createReviewForm'
import { connect } from 'react-redux'




const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: grey[400],
    width: 345,
    margin: 20,
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

}))


const ReservationCard = ({ reservation, createReviewFormData, updateCreateReviewForm, currentUser, history }) => {
  const resDate = (date) => {
let d = new Date(date)
let monthNames = [
  "Jan", "Feb", "Mar",
  "Apr", "May", "Jun", "Jul",
  "Aug", "Sep", "Oct",
  "Nov", "Dec"
];

let day = d.getDate() + 1
let monthIndex = d.getMonth() + 1
let year = d.getFullYear()


return monthIndex + '/' + day + '/' + year
}

function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
}

function datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second-first)/(1000*60*60*24));
}
  const totalDuration = datediff(parseDate(resDate(reservation.start_date)), parseDate(resDate(reservation.end_date)))
// alert(datediff(parseDate(first.value), parseDate(second.value)));
    const totalPrice = (totalDuration * reservation.car.daily_rate)
    function percentage(num, per)
    {
    return (num/100)*per;
    }

    const totalWeeklyDiscount = percentage(totalPrice, reservation.car.weekly_discount)
    const totalMonthlyDiscount = percentage(totalPrice, reservation.car.Monthly_discount)
    const totalAfterWeeklyDiscount = totalPrice - totalWeeklyDiscount
    const totalAfterMothlyDiscount = totalPrice - totalMonthlyDiscount


  const classes = useStyles()

  const [expanded, setExpanded] = React.useState(false)
  const title = `${reservation.car.make} ${reservation.car.model}`
  function handleExpandClick() {
    setExpanded(!expanded)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedFormInfo = {
      ...createReviewFormData,
      car: {
          id: reservation.car_id,
          make: reservation.car.make,
          model: reservation.car.model,
          year: reservation.car.year,
          img: reservation.car.img,
          daily_rate: reservation.car.daily_rate,
          weekly_discount: reservation.car.weekly_discount,
          monthly_discount: reservation.car.monthly_discount,
          description: reservation.car.description
      },
      reservation_id: reservation.id,
      customer_id: currentUser.id
    }

    updateCreateReviewForm(updatedFormInfo)
    history.push('/create_review')

  }

  return (

    <Card id="car-card" className={classes.card} >
      <CardHeader className={classes.cardHeader}
        avatar={
          <Avatar aria-label="Owner Img" className={classes.avatar} image={reservation.owner.img}>
            <img className="owner-img" src={reservation.owner.img} alt="Profile Pic"/>
          </Avatar>
        }
        action={
         <IconButton aria-label="Settings">
           <MoreVertIcon />
         </IconButton>
       }
       title={title}
       subheader={reservation.car.year}/>
        <CardMedia
          className={classes.media}
          image={reservation.car.img}
          title= {title}
          />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {reservation.car.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button label='ReviewForm' color="primary" onClick={handleSubmit} aria-label="Share">
          Review
        </Button>
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
          <Typography className="reservation-info">

              <strong>Start Date:</strong> {resDate(reservation.start_date)}<br />
              <strong>Start Time:</strong> {reservation.start_time}<br />
              <strong>Return Date:</strong> {resDate(reservation.end_date)}<br />
              <strong>Return Time:</strong> {reservation.end_time}<br />
              <strong>Total Duration:</strong> {totalDuration} Days <br />
              <strong>Daily Rate:</strong> ${reservation.car.daily_rate}<br />
              <strong>Total Price:</strong> ${totalPrice} <br />
               {(totalDuration > 7 )? <><strong>Weekly Discount Applied:</strong> {reservation.car.weekly_discount}%<br /><strong>Savings:</strong> ${totalWeeklyDiscount}<br /><strong>Total Discounted Price:</strong><>${totalAfterWeeklyDiscount}</><br /></> : null }
               {(totalDuration > 30 )? <><strong>Monthly Discount Applied:</strong> {reservation.car.monthly_discount}%<br /><strong>Savings:</strong> ${totalMonthlyDiscount}<br /><strong>Total Discounted Price:</strong><>${totalAfterMothlyDiscount}</><br /></> : null }
          </Typography>
        </CardContent>
    </Collapse>
    </Card>


  )
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews,
    currentUser: state.currentUser,
    createReviewFormData: state.createReviewFormData

  }
}

export default withRouter(connect(mapStateToProps, { updateCreateReviewForm })(ReservationCard))
