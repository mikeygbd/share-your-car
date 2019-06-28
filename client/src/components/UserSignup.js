import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../styles/registration.css'
import Toolbar from '@material-ui/core/Toolbar';
import { connect } from 'react-redux';
import { signup } from '../actions/currentUser'
import { updateSignupForm } from '../actions/signupForm'
import { withRouter } from 'react-router-dom';


const UserSignup = ({ history, signupFormData, updateSignupForm, signup}) => {


  const handleUserChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }
  const handleHometownChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      hometown: {
      ...signupFormData.hometown,
      [name]: value
    }
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData)
    history.push('/')


  }

    return (
      <div className="SignUp">
    <div className="UserForm">

        <div className="UserForm-title">
        <Toolbar>Enter Your Details</Toolbar>
        </div>
        <br />
        <form id="multi-form" onSubmit={handleSubmit}>
        <TextField
        name="firstname"
        placeholder="First Name"
        onChange={handleUserChange}
        value={signupFormData.firstname}
        required
        />
        <br />
        <TextField
        name="lastname"
        placeholder="Last Name"
        onChange={handleUserChange}
        value={signupFormData.lastname}
        required
        />
        <br />
        <TextField
        name="email"
        placeholder="Email"
        onChange={handleUserChange}
        value={signupFormData.email}
        />
        <br />
        <TextField
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleUserChange}
        value={signupFormData.password}
        />
        <br />
        <TextField
        name="img"
        type="text"
        placeholder="Img URL"
        onChange={handleUserChange}
        value={signupFormData.img}
        />

        <br />
        <TextField
        name="city"
        placeholder="City"
        onChange={handleHometownChange}
        value={signupFormData.city}
        />
        <br />
        <TextField
        name="state"
        type="text"
        placeholder="State"
        onChange={handleHometownChange}
        value={signupFormData.state}

        />
        <br />
        <TextField
        name="country"
        type="text"
        placeholder="Country"
        onChange={handleHometownChange}
        value={signupFormData.country}

        />
        <br />
        <div className="reg-btn">
        <Button
        type="submit"
        variant="contained"
        color="primary"
        >Sign Up</Button>
        </div>


    </form>
</div>
</div>
    )
  }


const mapStateToProps = state => {
  return {
  signupFormData: state.signupForm
  }
}


export default withRouter(connect(mapStateToProps, { updateSignupForm, signup })(UserSignup))
