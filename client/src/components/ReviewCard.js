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


const ReviewCard = ({ review }) => {
  const classes = useStyles()



  return (

    <Card id="car-card" className={classes.card} >
          <CardHeader>
          <Avatar aria-label="Owner Img" className={classes.avatar} image={review.user.img}>
            <img className="owner-img" src={review.user.img} alt="Profile Pic"/>
          </Avatar>
            {review.user.firstname} {review.user.lastname}
          </CardHeader>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {review.content}
        </Typography>
      </CardContent>
    </Card>


  )
}

export default ReviewCard