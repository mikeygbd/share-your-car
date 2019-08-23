import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Card, CardContent, CardHeader, CardMedia, CardActions, Collapse, Avatar, IconButton, Typography, Button } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';


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


const BookingCard = ({ booking }) => {
    const classes = useStyles()

  const resDate = (date) => {
    let d = new Date(date)
    let day = d.getDate()
    let monthIndex = d.getMonth()
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
  const totalDuration = datediff(parseDate(resDate(booking.start_date)), parseDate(resDate(booking.end_date)))
// alert(datediff(parseDate(first.value), parseDate(second.value)));
    const totalPrice = (totalDuration * booking.car.daily_rate)
    function percentage(num, per)
    {
    return (num/100)*per;
    }

    const totalWeeklyDiscount = percentage(totalPrice, booking.car.weekly_discount)
    const totalMonthlyDiscount = percentage(totalPrice, booking.car.Monthly_discount)
    const totalAfterWeeklyDiscount = totalPrice - totalWeeklyDiscount
    const totalAfterMothlyDiscount = totalPrice - totalMonthlyDiscount




  const [expanded, setExpanded] = React.useState(false)
  const title = `${booking.car.make} ${booking.car.model}`
  function handleExpandClick() {
    setExpanded(!expanded)
  }

  return (

    <Card id="car-card" className={classes.card} >
      <CardHeader className={classes.cardHeader}
        avatar={
          <Avatar aria-label="Owner Img" className={classes.avatar} image={booking.customer.img}>
            <img className="owner-img" src={booking.customer.img} alt="Profile Pic"/>
          </Avatar>
        }
        action={
          <IconButton aria-label="Settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={booking.car.year}/>
      <CardMedia
        className={classes.media}
        image={booking.car.img}
        title= {title}
        />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {booking.car.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button label='ReviewForm' color="primary" to='/review_form' component={Link}  aria-label="Share">
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
          <Typography>
            <strong>Start Date:</strong> {resDate(booking.start_date)}<br />
            <strong>Start Time:</strong> {booking.start_time}<br />
            <strong>Return Date:</strong> {resDate(booking.end_date)}<br />
            <strong>Return Time:</strong> {booking.end_time}<br />
            <strong>Total Duration:</strong> {totalDuration} Days <br />
            <strong>Daily Rate:</strong> ${booking.car.daily_rate}<br />
            <strong>Total Price:</strong> ${totalPrice} <br />
            {(totalDuration > 7 )? <><strong>Weekly Discount Applied:</strong> {booking.car.weekly_discount}%<br /><strong>Savings:</strong> ${totalWeeklyDiscount}<br /><strong>Total Discounted Price:</strong><>${totalAfterWeeklyDiscount}</><br /></> : null }
            {(totalDuration > 30 )? <><strong>Monthly Discount Applied:</strong> {booking.car.monthly_discount}%<br /><strong>Savings:</strong> ${totalMonthlyDiscount}<br /><strong>Total Discounted Price:</strong><>${totalAfterMothlyDiscount}</><br /></> : null }
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default BookingCard
