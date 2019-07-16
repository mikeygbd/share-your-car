import React from 'react';
import ReactLightCalendar from '@lls/react-light-calendar'
import ReservationCard from './ReservationCard';
import '@lls/react-light-calendar/dist/index.css'

const DAY_LABELS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const MONTH_LABELS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

class Calendar extends React.Component {
  constructor(props) {
    super(props)
    const date = new Date()
    const startDate = date.getTime()
    this.state = {
      bookedStartDate: [],
      bookedEndDate: [],
      startDate, // Today
      endDate: new Date(startDate).setDate(date.getDate() + 6),
      car: this.props.car,
      reservations: this.props.reservations
    }

  }

  onChange = (startDate, endDate) => this.setState({ startDate, endDate })



  render = () => {



    const { startDate, endDate, car, reservations, bookedStartDate, bookedEndDate } = this.state

    const resDate = (date) => {
  let d = new Date(date)
  let monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct",
    "Nov", "Dec"
  ];

  let day = d.getDate() + 1
  let monthIndex = d.getMonth() + 1
  let year = d.getFullYear()


  return monthIndex + '/' + day + '/' + year
  }

    const reservation = reservations.length > 0 ? reservations.map((r) => {
        return (
            <p key={r.id}>
                {resDate(r.start_date)}-{resDate(r.end_date)}
            </p>
        );

    }) : null

      const reservationsCalendar = reservations.length > 0 ? reservations.map(r => <ReactLightCalendar reservation={r} key={r.id} disableDates={date => date < new Date().getTime()} bookedStartDate={r.start_date} bookedEndDate={r.end_date}  startDate={startDate} endDate={endDate} onChange={this.onChange} range displayTime/>) : null




    return (
          <div>
          {reservation}
          {reservationsCalendar}
        </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    reservations: state.reservations,
    cars: state.cars,
    currentUser: state.currentUser

  }
}
export default Calendar
