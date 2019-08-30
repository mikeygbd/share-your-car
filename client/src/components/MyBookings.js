import React from 'react'
import BookingCard from './BookingCard'
import { connect } from 'react-redux'

const MyBookings = ({ myBookings, currentUser}) => {
  const bookingCards = myBookings.length > 0 ? myBookings.map(b => <BookingCard booking={b} key={b.id}/>) : null

  return (
    <div className="MyBookings">
     {bookingCards}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    myBookings: state.myBookings,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(MyBookings)
