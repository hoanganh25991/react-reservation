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
  render() {
    let { popup } = this.props
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
                  <div className="payment-status">
                    {popup.status} <span className="caret" />
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
                      <h1 className=""><CountDown /></h1>
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
                  <div className="col-xs-7" />
                  <div className="col-xs-5 remarks">
                    <div className="customer-remark">
                      <h3>customer remarks</h3>
                      <textarea name="customer_remarks" id="customer_remarks" cols="30" rows="10" />
                    </div>
                    <div className="staff-remark">
                      <h3>staff remarks</h3>
                      <textarea name="customer_remarks" id="customer_remarks" cols="30" rows="10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          : null}
      </div>
    )
  }
}
