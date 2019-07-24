import React from 'react';
import ReactLightCalendar from '@lls/react-light-calendar'
import '@lls/react-light-calendar/dist/index.css'


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
          {reservationsCalendar ? reservationsCalendar : <ReactLightCalendar disableDates={date => date < new Date().getTime()}  startDate={startDate} endDate={endDate} onChange={this.onChange} range displayTime/>}
        </div>

    )
  }
}


export default Calendar
