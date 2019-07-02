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
import { connect } from 'react-redux'
import StarRatingComponent from 'react-star-rating-component';


const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: grey[400],
    width: 295,
    margin: 10,
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


const ReviewCard = ({ review, currentUser }) => {

  const classes = useStyles()
  const fullName = `${review.customer.firstname} ${review.customer.lastname}`


  return (

    <Card id="car-card" className={classes.card} >
      <CardHeader className={classes.cardHeader}
        avatar={
          <Avatar aria-label="Owner Img" className={classes.avatar} image={review.customer.img}>
            <img className="owner-img" src={review.customer.img} alt="Profile Pic"/>
          </Avatar>
        }
        action={
          <IconButton >
          <Avatar aria-label="Settings" className={classes.avatar} image={review.car.img}>
            <img className="car-thumbnail" src={review.car.img} alt="Car Pic"/>
          </Avatar>
        </IconButton>
       }
       title={fullName}
       subheader={
         <>
         <StarRatingComponent
             name="rate2"
             editing={false}
             starCount={5}
             value={review.rating}
           />
           <Typography variant="body2" color="textSecondary" component="p">
             {review.content}
           </Typography>
           </>
       }
       />
    </Card>
  )
}


const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,


  }
}

export default withRouter(connect(mapStateToProps)(ReviewCard))
