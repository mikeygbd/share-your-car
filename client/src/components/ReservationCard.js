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
import { Link, withRouter } from 'react-router-dom';
import ReviewCard from './ReviewCard';
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
let monthIndex = d.getMonth()
let year = d.getFullYear()
let time = d.getTime()


return monthNames[monthIndex] + '/' + day + '/' + year
}

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
          weekly_rate: reservation.car.weekly_rate,
          monthly_rate: reservation.car.monthly_rate,
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
          <Typography>
            Start Date: {resDate(reservation.start_date)}<br />
          Start Time: {reservation.start_time}<br />
          Return Date: {resDate(reservation.end_date)}<br />
        Return Time: {reservation.end_time}<br />


        Daily Rate: ${reservation.car.daily_rate}<br />
      Weekly Rate: ${reservation.car.weekly_rate}<br />
    Monthly Rate: ${reservation.car.monthly_rate}<br />

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
