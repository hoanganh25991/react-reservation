import React from "react"
import * as c from "../actions/const-name"

import AlignCenter from "./helpers/AlignCenter"

import Remarks from "./ResvRemarks"

import "../css/App.css"
import "../css/ReservationPopupLayout.css"
import "../css/flexboxgrid.css"
import "../css/color.css"
import CountDown from "./CountDown"

export default class ReservationPopup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showSelectBox: null
    }
  }

  toggleSelectBox = () => {
    let { showSelectBox: curr } = this.state
    let showSelectBox = !curr
    this.setState({ showSelectBox })
  }

  getColorByStatus = status => {
    let color
    switch (true) {
      case status === 50 || status === 100 || status === 200 || status === 300 || status === 400: {
        color = "whiteText"
        break
      }
      case status === -100 || status === -200 || status === -300: {
        color = "redText"
        break
      }
      case status === 300: {
        color = "greenText"
        break
      }
      default: {
        color = null
        break
      }
    }
    return color
  }

  render() {
    let { popup } = this.props
    let { updatePopupStatus } = this.props
    updatePopupStatus = () => console.log("Update popup status")
    popup.customer_remarks = "request for birthday party cake & song, need wheelchair access/assistant."
    popup.staff_remarks = "Use different color & new line for staff note like this. This text can be quite long long"
    popup.payment_currency = "$"
    popup.payment_amount = "123"
    popup.payment_status = 100
    popup.payment_authorization_id = "r25uht567hf57c"
    let getStatusTitle = function(status) {
      let statusTitle
      switch (popup.status) {
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
      switch (popup.payment_status) {
        case 25: {
          paymentStatusTitle = null
          break
        }
        case 50: {
          paymentStatusTitle = `${popup.payment_currency}${popup.payment_amount} Voided`
          break
        }
        case 100: {
          paymentStatusTitle = `${popup.payment_currency}${popup.payment_amount} Authorized`
          break
        }
        case 200: {
          paymentStatusTitle = `${popup.payment_currency}${popup.payment_amount} Charged`
          break
        }
        default: {
          paymentStatusTitle = null
          break
        }
      }
      return paymentStatusTitle
    }

    let whiteTextPayment = popup.payment_status === 50 ? "whiteText" : ""
    let redTextPayment = popup.payment_status === 200 ? "redText" : ""
    let blueTextPayment = popup.payment_status === 100 ? "blueText" : ""

    let color = this.getColorByStatus(popup.status)

    return (
      <div>
        {/* Only show it up when status as SHOW_POP_UP */
        popup.showHide === c.SHOW_POPUP
          ? <div className="popup">
              <div className="self-center">
                {/**
               * Header
               * [Confirm Id][Status]     [Hours before]
               */}
                <div className="row">
                  <div className="confirmId t-center back40">{popup.confirm_id}</div>
                  <div className="SelectBox">
                    <div onClick={e => this.toggleSelectBox()} className={`${color} payment-status`}>
                      {getStatusTitle(popup.status)} <span className="caret" />
                    </div>
                    {/*<div >Hello</div>*/}
                    {this.state.showSelectBox
                      ? <div>
                          <ul className="dropdown-menu">
                            <li onClick={() => updatePopupStatus(c.RESERVED)}>RESERVED</li>
                            <li onClick={() => updatePopupStatus(c.REMINDER_SENT)}>REMINDER SENT</li>
                            <li onClick={() => updatePopupStatus(c.CONFIRMED)}>CONFIRMED</li>
                            <li onClick={() => updatePopupStatus(c.ARRIVED)}>ARRIVED</li>
                            <li onClick={() => updatePopupStatus(c.USER_CANCELLED)}>USER CANCELLED</li>
                            <li onClick={() => updatePopupStatus(c.STAFF_CANCELLED)}>STAFF CANCELLED</li>
                            <li onClick={() => updatePopupStatus(c.NO_SHOW)}>NO SHOW</li>
                          </ul>
                        </div>
                      : null}
                  </div>

                  <div className="col-xs row hours back40">
                    <div className="col-xs t-right">
                      <svg fill="#ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                      </svg>
                    </div>
                    <div className="t-hours">
                      <h1 className=""><CountDown startTime={popup.date} /></h1>
                      <p>days hours mins secs</p>
                    </div>
                  </div>
                </div>
                {/**
               * Body
               * [Customer]   [Remarks]
               * [Pax]        [Remarks]
               * [Date]       [Payment void|charge]
               */}
                <div className="row content">
                  <div className="col-xs-7 info">
                    <div className="customer-info">
                      <h3>Customer</h3>
                      <div className="row">
                        <div className="customer-text">Name</div>
                        <div className="col-xs">
                          <input type="text" value={`${popup.first_name} ${popup.last_name}`} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="customer-text">Phone</div>
                        <div className="col-xs row">
                          <div className="phone-country">
                            <input type="text" value={`+${popup.phone_country_code}`} />
                          </div>
                          <div className="col-xs">
                            <input type="text" value={popup.phone} />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="customer-text">Email</div>
                        <div className="col-xs">
                          <input type="text" value={popup.email} />
                        </div>
                      </div>
                    </div>
                    <div className="pax-info">
                      <h3>Pax</h3>
                      <div className="row">
                        <div className="pax-text">Adult</div>
                        <div className="col-xs calc-pax">
                          <span className="calc">
                            <svg
                              fill="rgba(112, 136, 253, 0.9)"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M19 13H5v-2h14v2z" />
                              <path d="M0 0h24v24H0z" fill="none" />
                            </svg>
                          </span>
                          <span className="calcSuccess">{popup.adult_pax}</span>
                          <span className="calc">
                            <svg
                              fill="rgba(112, 136, 253, 0.9)"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                              <path d="M0 0h24v24H0z" fill="none" />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="pax-text">Children</div>
                        <div className="col-xs calc-pax">
                          <span className="calc">
                            <svg
                              fill="rgba(112, 136, 253, 0.9)"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M19 13H5v-2h14v2z" />
                              <path d="M0 0h24v24H0z" fill="none" />
                            </svg>
                          </span>
                          <span className="calcSuccess">{popup.children_pax}</span>
                          <span className="calc">
                            <svg
                              fill="rgba(112, 136, 253, 0.9)"
                              height="24"
                              viewBox="0 0 24 24"
                              width="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                              <path d="M0 0h24v24H0z" fill="none" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row date-reminder-info">
                      <div className="col-xs date-info">
                        <h3>Date & time</h3>
                        <div className="row">
                          <div className="time-info">
                            <p>{popup.date ? popup.date.format("DD MMM YYYY") : popup.reservation_timestamp}</p>
                            <p>{popup.date ? popup.date.format("HH:mm") : popup.reservation_timestamp}</p>
                          </div>
                          <div className="col-xs date-svg">
                            <span>
                              <svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="30"
                                height="30"
                                viewBox="0 0 512 512"
                                enableBackground="new 0 0 512 512"
                              >
                                <path d="M64,80V16c0-8.844,7.156-16,16-16s16,7.156,16,16v64c0,8.844-7.156,16-16,16S64,88.844,64,80z M336,96
                                c8.844,0,16-7.156,16-16V16c0-8.844-7.156-16-16-16s-16,7.156-16,16v64C320,88.844,327.156,96,336,96z M512,384
                                c0,70.688-57.313,128-128,128s-128-57.313-128-128s57.313-128,128-128S512,313.313,512,384z M480,384c0-52.938-43.063-96-96-96
                                s-96,43.063-96,96s43.063,96,96,96S480,436.938,480,384z M128,192H64v64h64V192z M64,352h64v-64H64V352z M160,256h64v-64h-64V256z
                                M160,352h64v-64h-64V352z M32,380.813V160h352v64h32V99.188C416,79.75,400.5,64,381.344,64H368v16c0,17.625-14.344,32-32,32
                                s-32-14.375-32-32V64H112v16c0,17.625-14.344,32-32,32S48,97.625,48,80V64H34.672C15.516,64,0,79.75,0,99.188v281.625
                                C0,400.188,15.516,416,34.672,416H224v-32H34.672C33.219,384,32,382.5,32,380.813z M320,256v-64h-64v64H320z M432,384h-48v-48
                                c0-8.844-7.156-16-16-16s-16,7.156-16,16v64c0,8.844,7.156,16,16,16h64c8.844,0,16-7.156,16-16S440.844,384,432,384z" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs reminder-info">
                        <h3>Remeinder SMS</h3>
                        <div className="checkbox">
                          <input type="checkbox" id="test6" name="confirm" required />
                          <label htmlFor="test6">Enabled</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-5 remarks">
                    <div className="customer-remark">
                      <h3>customer remarks</h3>
                      <textarea
                        name="customer_remarks"
                        id="customer_remarks"
                        value={popup.customer_remarks}
                        cols="30"
                        rows="10"
                      />
                    </div>
                    <div className="staff-remark">
                      <h3>staff remarks</h3>
                      <textarea
                        name="customer_remarks"
                        id="customer_remarks"
                        value={popup.staff_remarks}
                        cols="30"
                        rows="10"
                      />
                    </div>
                    <div className="deposit row">
                      <div className="col-xs">
                        <h3>Deposit</h3>
                        <p className={whiteTextPayment || redTextPayment || blueTextPayment}>
                          {getPaymentStatusTitle(popup.payment_status)}
                        </p>
                        <p className={whiteTextPayment || redTextPayment || blueTextPayment}>
                          {popup.payment_authorization_id}
                        </p>
                      </div>
                      <div className="button-deposit">
                        <div className="btn-void">
                          <a>void</a>
                        </div>
                        <div className="btn-charge">
                          <a>charge</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-bottom row">
                  <div className="col-xs-7 row">
                    <div className="col-xs-7 btn-send">send reminder</div>
                    <div className="col-xs-5 btn-empty" />
                  </div>
                  <div className="col-xs-5 row">
                    <div className="col-xs btn-cancel">cancel</div>
                    <div className="col-xs btn-update">update</div>
                  </div>
                </div>
              </div>
            </div>
          : null}
      </div>
    )
  }
}
