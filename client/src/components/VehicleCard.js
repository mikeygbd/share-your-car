import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {GridList, GridListTile, GridListTileBar, ListSubheader, IconButton, CardActionArea,  } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { deleteOwnerCar } from '../actions/myCars'
import { getMyCars } from '../actions/myCars'
import { updateCreateReservationForm } from '../actions/createReservationForm'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: "#ccc",
    width: "100%",
    height: "100%",
  },
  gridList: {

  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  sub: {
    backgroundColor: "black",
    color: "white",
  },
  tile: {
    height:250,
    width: 430



  }

}));










const VehicleCar = ({ createReservationFormData, updateCreateReservationForm, history, myCars, cars, deleteCar, filterCars, deleteOwnerCar, reviews, currentUser }) => {
  const classes = useStyles();

  const handleClick = (id) => {
    console.log(id)
  }

  return (
    <div className={classes.root}>
        <GridList cellHeight={180} cols={3} cellHeight={250} cellWidth={300} className={classes.gridList}>
          <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
            <ListSubheader className={classes.sub} component="div">Cars</ListSubheader>
          </GridListTile>
          {cars.map(car => (
            <GridListTile >
              <CardActionArea>

              <img className={classes.tile} src={car.img}  alt={car.title} />
              </CardActionArea>
              <GridListTileBar
                title={<span> {car.make} {car.model}</span>}
                subtitle={<span> {car.year}</span>}
                actionIcon={
                  <IconButton aria-label={`info about ${car.title}`} className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }

   const mapStateToProps = state => {
     return {
       currentUser: state.currentUser,
       createReservationFormData: state.createReservationForm,
       reviews: state.reviews,
       myCars: state.myCars,
       cars: state.cars


     }
   }


export default  withRouter(connect(mapStateToProps, { updateCreateReservationForm, getMyCars, deleteOwnerCar })(VehicleCar))
