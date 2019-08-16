import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm'
import { login } from '../actions/currentUser'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/registration.css'
import Toolbar from '@material-ui/core/Toolbar';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 130,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

const Login = ({ history, loginForm, updateLoginForm, login }) => {
  const classes = useStyles();


  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginForm,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginForm)
    history.push('/')
  }

  return (
    <div className="Login">
    <div className="UserForm">
      <div className="UserForm-title">

      <Toolbar>Log in</Toolbar>

      </div>
    <form id="multi-form" onSubmit={handleSubmit}>
      <TextField
        id="standard-with-placeholder"
        type="text"
        name="email"
        placeholder="Email"
        className={classes.textField}
        value={loginForm.email}
        onChange={handleInputChange}
      />
    <br />
      <TextField
         id="standard-password-input"
         name="password"
         className={classes.textField}
         type="password"
         placeholder="Password"
         autoComplete="current-password"
         value={loginForm.password}
         onChange={handleInputChange}
       />
       <br />
       <div className="reg-btn">
     <Button variant="contained" size="small" color="primary" type="submit" onSubmit={handleSubmit} className={classes.margin}>
            Login
          </Button>
          </div>
          <br />

    </form>
  </div>
  </div>

  )
}

const mapStateToProps = state => {
  return {
  loginForm: state.loginForm
  }
}

export default withRouter(connect(mapStateToProps, { updateLoginForm, login })(Login))
