import React from 'react'
import CarCard from './CarCard'
import {useSelector, useAction} from 'react-redux'
import {deleteMyCar} from '../actions/myCars'
import { connect } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router-dom';
import lifecycle from 'react-pure-lifecycle';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles({
  card: {
    width: 645,
    height: 645,
    marginLeft: 320,

  },
  avatar: {
      backgroundColor: 'white'[500],
      marginLeft: 30,
  },
  gridList: {
  width: 500,
  height: 450,
},
gtile: {
  backgroundColor: "black",
}
});


const Car = ({ car }) => {
const classes = useStyles();
const title = `${car.make} ${car.model}`
  return (
    <div className="Car">
      <Card className={classes.card}>

      <GridListTile className={classes.gtile}>
        <CardMedia
        component="img"
        alt={title}
        height="340"
        image={car.img}
        title={title}
      />
      <GridListTileBar
        title={title}
        subtitle={<span>Daily Rate: ${car.daily_rate}</span>}
      />
          </GridListTile>

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {car.description}
          </Typography>
        </CardContent>

      <CardActions>
        <div className="ownerInfo">
        <Avatar aria-label="Owner Img" className={classes.avatar} image={car.owner.img} >
          <img className="owner-img"  src={car.owner.img} alt="Profile Pic"/>
        </Avatar>
        <Typography variant="body2" color="textSecondary" component="p">
        <strong>Owner:</strong> {car.owner.firstname} {car.owner.lastname}<br />
        <strong>Weekly Discount:</strong> {car.weekly_discount}%<br />
        <strong>Monthly Discount:</strong> {car.monthly_discount}%<br />
          </Typography>
        </div>

      </CardActions>
    </Card>


     </div>
  )
}



export default Car
