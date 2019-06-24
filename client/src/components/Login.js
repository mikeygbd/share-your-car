import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm'
import { login } from '../actions/currentUser'

const Login = ({ loginForm, updateLoginForm, login }) => {

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

  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" placeholder="Email" value={loginForm.email} onChange={handleInputChange} />
      <input type="password" name="password" placeholder="Password" value={loginForm.password} onChange={handleInputChange} />
      <input type="submit" value="Log In" />
    </form>
  )
}

//allows for destructuring
const mapStateToProps = state => {
  return {
  loginForm: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)
