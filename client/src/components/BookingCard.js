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
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import ReviewCard from './ReviewCard';
import Button from '@material-ui/core/Button';


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
  const resDate = (date) => {
let d = new Date(date)
let monthNames = [
  "Jan", "Feb", "Mar",
  "Apr", "May", "Jun", "Jul",
  "Aug", "Sep", "Oct",
  "Nov", "Dec"
];

let day = d.getDate()
let monthIndex = d.getMonth()
let year = d.getFullYear()
let time = d.getTime()


return monthNames[monthIndex] + '/' + day + '/' + year
}

  const classes = useStyles()

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
            {booking.reviews[0]}
            Start Date: {resDate(booking.start_date)}<br />
          Start Time: {resDate(booking.start_time)}<br />
          Return Date: {resDate(booking.end_date)}<br />
        Return Time: {resDate(booking.time)}<br />


        Daily Rate: ${booking.car.daily_rate}<br />
      Weekly Rate: ${booking.car.weekly_rate}<br />
    Monthly Rate: ${booking.car.monthly_rate}<br />

          </Typography>
        </CardContent>
    </Collapse>
    </Card>


  )
}

export default BookingCard
