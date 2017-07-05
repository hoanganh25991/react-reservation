import React from "react"

// import Layout from "./ReservationLayout";

class ReservationStatus extends React.Component {
  helloWord = () => {
    // console.log("hello world")
  }

  render() {
    let { status, payment_status, payment_currency, payment_amount } = this.props
    let getStatusTitle = function(status) {
      let statusTitle
      switch (status) {
        case 50: {
          statusTitle = "REQUIRED DEPOSIT"
          break
        }
        case 100: {
          statusTitle = "Reserved"
          break
        }
        case 200: {
          statusTitle = "Reminder sent"
          break
        }
        case 300: {
          statusTitle = "CONFIRMED"
          break
        }
        case 400: {
          statusTitle = "arrived"
          break
        }
        case -100: {
          statusTitle = "user cancelled"
          break
        }
        case -200: {
          statusTitle = "staff cancelled"
          break
        }
        case -300: {
          statusTitle = "no show"
          break
        }
        default: {
          statusTitle = null
          break
        }
      }
      return statusTitle
    }

    let getPaymentStatusTitle = function(payment_status) {
      let paymentStatusTitle
      switch (payment_status) {
        case 25: {
          paymentStatusTitle = null
          break
        }
        case 50: {
          paymentStatusTitle = `${payment_currency}${payment_amount} voided`
          break
        }
        case 100: {
          paymentStatusTitle = `${payment_currency}${payment_amount} authorized`
          break
        }
        case 200: {
          paymentStatusTitle = `${payment_currency}${payment_amount} charged`
          break
        }
        default: {
          paymentStatusTitle = null
          break
        }
      }
      return paymentStatusTitle
    }

    let whiteText = status === 50 || status === 100 || status === 200 || status === 300 || status === 400
      ? "whiteText"
      : ""
    let redText = status === -100 || status === -200 || status === -300 ? "redText" : ""
    let greenText = status === 300 ? "greenText" : ""

    let whiteTextPayment = payment_status === 50 ? "whiteText" : ""
    let redTextPayment = payment_status === 200 ? "redText" : ""
    let blueTextPayment = payment_status === 100 ? "blueText" : ""

    return (
      <div className="status-info">
        {/*<div>{this.helloWord()}</div>*/}
        <h3 className={whiteText || redText || greenText}>{getStatusTitle(status)}</h3>
        <p className={whiteTextPayment || redTextPayment || blueTextPayment}>{getPaymentStatusTitle(payment_status)}</p>
      </div>
    )
    // <p>{payment_currency}{reservation.payment_amount} authorized</p>
  }
}

export default ReservationStatus
