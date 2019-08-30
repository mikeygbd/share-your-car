import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardHeader, Avatar, IconButton, Typography, } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import StarRatingComponent from 'react-star-rating-component';


const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: grey[400],
    width: "94%",
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
