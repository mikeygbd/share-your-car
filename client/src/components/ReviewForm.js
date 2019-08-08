import React from 'react'
import {TextField, Button, Toolbar} from '@material-ui/core';
import '../styles/registration.css'
import { connect } from 'react-redux';
import { createReview } from '../actions/reviews'
import { updateCreateReviewForm } from '../actions/createReviewForm'
import {withRouter } from 'react-router-dom';
import Rating from './Rating';


const ReviewForm = ({ history, createReviewFormData, updateCreateReviewForm, createReview}) => {


  const handleChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...createReviewFormData,
      [name]: value
    }
    updateCreateReviewForm(updatedFormInfo)
  }


  const handleSubmit = event => {

    event.preventDefault()
    createReview(createReviewFormData)
    history.push('/')

  }

    return (

      <div className="Review">
    <div className="UserForm">
        <div className="UserForm-title">
        <Toolbar>Review Details</Toolbar>
        </div>
        <br />
        <form id="multi-form" onSubmit={handleSubmit}>
        <Rating/>
        <TextField
        name="rating"
        type="rating"
        placeholder="Rating 1-5"
        onChange={handleChange}
        value={createReviewFormData.rating}
        required
        />
        <br />
          <TextField
          name="content"
          type="text-area"
          placeholder="Content"
          onChange={handleChange}
          value={createReviewFormData.content}
          required
          />
        <br />
        <div className="reg-btn">
        <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        >Sumbit</Button>
        </div>
    </form>
</div>
</div>
    )
  }


const mapStateToProps = state => {
  return {
  createReviewFormData: state.createReviewForm
  }
}


export default withRouter(connect(mapStateToProps, { updateCreateReviewForm, createReview })(ReviewForm))
