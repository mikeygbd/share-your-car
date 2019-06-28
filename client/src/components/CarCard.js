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
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import '../styles/car.css'

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


const CarCard = ({ car, currentUser }) => {
  const classes = useStyles()

  const [expanded, setExpanded] = React.useState(false)
  const title = `${car.make} ${car.model}`
  function handleExpandClick() {
    setExpanded(!expanded)
  }

  return (

    <Card id="car-card" className={classes.card} >
      <CardHeader className={classes.cardHeader}
        avatar={
          <Avatar aria-label="Owner Img" className={classes.avatar} image={car.owner.img}>
            <img className="owner-img" src={car.owner.img} alt="Profile Pic"/>
          </Avatar>
        }
        action={
         <IconButton aria-label="Settings">
           <MoreVertIcon />
         </IconButton>
       }
       title={title}
       subheader={car.year}/>
        <CardMedia
          className={classes.media}
          image={car.img}
          title= {title}
          />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {car.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>

        {currentUser && (car.owner.email === currentUser.email) ?
          <Button label='MyCars' color="primary" to='/my_cars' component={Link}  aria-label="Share">
            My Car
          </Button>
           :
        <Button label='ReservationForm' color="primary" to='/reservation_form' component={Link}  aria-label="Share">
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
          <Typography>
          Car Milage: {car.milage}<br />
        Daily Rate: ${car.daily_rate}<br />
      Weekly Rate: ${car.weekly_rate}<br />
    Monthly Rate: ${car.monthly_rate}<br />
          </Typography>
        </CardContent>
    </Collapse>
    </Card>


  )
}

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(CarCard)
