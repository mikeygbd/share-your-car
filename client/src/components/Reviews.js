import React from 'react'
import CarCard from './CarCard'

import { connect } from 'react-redux'


const Reviews = ({ reviews}) => {
  const reviewCards = reviews.length > 0 ? reviews.map(r => <CarCard review={r} key={r.id}/>) : null

  return (
    <div className="Reviews">
      {reviewCards}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

export default connect(mapStateToProps)(Reviews)
