import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../styles/registration.css'
import Toolbar from '@material-ui/core/Toolbar';
import { connect } from 'react-redux';
import { signupCar } from '../actions/myCars'
import { updateSignupCarForm } from '../actions/signupCarForm'
import { withRouter } from 'react-router-dom';


const CarForm = ({ history, signupCarFormData, updateSignupCarForm, signupCar}) => {


  const handleChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupCarFormData,
      [name]: value
    }
    updateSignupCarForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signupCar(signupCarFormData)
    history.push('/my_cars')
  }

    return (
      <div className="CarForm" >
    <div className="UserForm">

        <div className="UserForm-title">
        <Toolbar>Enter Your Car Details</Toolbar>
        </div>
        <br />
        <form id="multi-form" onSubmit={handleSubmit}>
        <TextField
        name="make"
        type="text"

        placeholder="Make"
        onChange={handleChange}
        value={signupCarFormData.make}
        required
        />
        <br />
        <TextField
        name="model"
        type="text"
        placeholder="Model"
        onChange={handleChange}
        value={signupCarFormData.model}
        required
        />
        <br />
        <TextField
        name="year"
        type="text"
        placeholder="Year"
        onChange={handleChange}
        value={signupCarFormData.year}
        required
        />
        <br />
        <TextField
        name="img"
        type="text"
        placeholder="IMG"
        onChange={handleChange}
        value={signupCarFormData.img}
        required
        />

        <br />
        <TextField
        name="daily_rate"
        type="text"
        placeholder="Daily Rate"
        onChange={handleChange}
        value={signupCarFormData.daily_rate}
        required
        />
        <br />
        <TextField
        name="weekly_rate"
        type="text"
        placeholder="Weekly Rate"
        onChange={handleChange}
        value={signupCarFormData.weekly_rate}

        />
        <br />
        <TextField
        name="monthly_rate"
        type="text"
        placeholder="Monthly Rate"
        onChange={handleChange}
        value={signupCarFormData.monthly_rate}

        />
        <br />

        <TextField
        name="description"
        type="text"
        placeholder="Description"
        onChange={handleChange}
        value={signupCarFormData.description}

        />
        <br />

        <div className="reg-btn">

        <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        >Sign Up</Button>

        </div>


    </form>
</div>
</div>
    )
  }


const mapStateToProps = state => {
  return {
  signupCarFormData: state.signupCarForm
  }
}


export default withRouter(connect(mapStateToProps, { updateSignupCarForm, signupCar })(CarForm))
