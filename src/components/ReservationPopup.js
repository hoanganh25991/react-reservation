import React from "react"
import * as c from "../actions/const-name"

import AlignCenter from "./helpers/AlignCenter"

import Remarks from "./ResvRemarks"

import "../css/App.css"
import "../css/ReservationPopupLayout.css"

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
                <div className="flex-row header">
                  <div>
                    <AlignCenter className="pop-confirm-id padHorz">
                      <div>{popup.confirm_id}</div>
                    </AlignCenter>
                  </div>
                  <div>
                    <AlignCenter className="status text-gree">
                      <div>{popup.status}</div>
                    </AlignCenter>
                  </div>
                  <div className="flex1" />
                  <div>
                    <AlignCenter className="text-whit">
                      O
                    </AlignCenter>
                  </div>
                  <div>
                    <h1 className="text-whit">
                      <CountDown />
                    </h1>
                    <h3 className="text-gray">days hours minutes seconds</h3>
                  </div>
                </div>
                {/**
               * Body
               * [Customer]   [Remarks]
               * [Pax]        [Remarks]
               * [Date]       [Payment void|charge]
               */}
                <div className="flex-column body" style={{ padding: "30px 50px" }}>
                  <div className="flex-row">
                    {/**
                   * For right side
                   */}
                    <div className="flex-column flex1">
                      <h4 className="text-gray">CUSTOMER</h4>
                      {/**
                     * Customer info
                     */}
                      <div className="flex-row">
                        {/**
                       * For customer label: Name, Phone, Email
                       */}
                        <div className="flex-column" style={{ width: "150px" }}>
                          <h4 className="text-whit flex1">NAME</h4>
                          <h4 className="text-whit flex1">PHONE</h4>
                          <h4 className="text-whit flex1">EMAIL</h4>
                        </div>
                        {/**
                       * For customer value: Torin Nguyen, +65 903865657, torinnguyen@gmail.com
                       */}
                        <div className="flex1">
                          <div className="flex-column">
                            <div className="flex1">
                              <h3 className="text-blue highlight">
                                {popup.first_name}
                                {popup.last_name}
                              </h3>
                            </div>
                            <div className="flex1 flex-row">
                              <h3 className="text-blue highlight" style={{ width: "50px" }}>
                                ({popup.phone_country_code})
                              </h3>
                              <p />
                              <h3 className="text-blue highlight flex1">{popup.phone}</h3>
                            </div>
                            <div className="flex1">
                              <h3 className="text-blue highlight flex1">
                                {popup.email}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <br />
                      {/**
                     * Pax Info
                     */}
                      <h4 className="text-gray">PAX</h4>
                      <div className="flex-row">
                        <div className="flex-column" style={{ width: "150px" }}>
                          <div className="flex1">
                            <h4 className="text-whit">Adult</h4>
                          </div>
                          <div className="flex1">
                            <h4 className="text-whit">Children</h4>
                          </div>
                        </div>
                        <div className="flex-column flex1">
                          <div className="flex1">
                            <button className="highlight text-blue">-</button>
                            <span className="h3 text-whit">{popup.adult_pax}</span>
                            <button className="highlight text-blue">+</button>

                          </div>
                          <div className="flex1">
                            <button className="highlight text-blue">-</button>
                            <span className="h3 text-whit">{popup.children_pax}</span>
                            <button className="highlight text-blue">+</button>
                          </div>
                        </div>
                      </div>
                      <br />
                      <br />
                      <div className="flex-row">
                        <div className="flex1">
                          <div className="flex-column">
                            <h4 className="text-gray">DATE & TIME</h4>
                            <div className="flex-row">
                              <div>
                                <h3 className="text-whit">
                                  {popup.date ? popup.date.format("DD MMM YYYY") : popup.reservation_timestamp}
                                </h3>
                                <h3 className="text-whit">
                                  {popup.date ? popup.date.format("HH:mm") : popup.reservation_timestamp}
                                </h3>
                              </div>
                              <div className="flex1">
                                <AlignCenter>
                                  <div className="calendar highlight" />
                                </AlignCenter>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex1">
                          <div className="flex-column">
                            <h4 className="text-gray">REMINDER SMS</h4>
                            <div className="flex-row">
                              <div className="checkbox highlight" />
                              <p />
                              <h4 className="text-whit">Enabled</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/**
                   * For left side
                   */}
                    <div className="flex-column flex1">
                      {/**
                     * Customer remarks
                     */}
                      <h4 className="text-gray">CUSTOMER REMARKS</h4>
                      <div>{popup.customer_remarks}</div>
                      <br />
                      <br />
                      <h4 className="text-gray">STAFF REMARKS</h4>
                      <div>{popup.staff_remarks}</div>
                      <br />
                      <div className="flex-row">
                        <div className="flex-column flex1">
                          <h3 className="text-gray">PAYMENT AUTHORIZATION</h3>
                          <h3 className="text-blue">$128 Authorized</h3>
                          <h3 className="text-blue">76HYUJ89KJU</h3>
                        </div>
                        <div className="flex-column">
                          <div className="flex-row btn-large danger">
                            <AlignCenter>
                              <h3 className="text-whit padHorz">VOID</h3>
                            </AlignCenter>
                          </div>
                          <div className="flex-row btn-large primary">
                            <AlignCenter>
                              <h3 className="text-whit padHorz">CHARGE</h3>
                            </AlignCenter>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/**
                 * Fotter
                 * [SEND REMINDER] [CANCEL][UPDATE]
                 */}
                </div>
                <div className="flex-row footer">
                  <div className="btn-large default">
                    <AlignCenter>
                      <h3 className="text-whit">SEND REMINDER</h3>
                    </AlignCenter>
                  </div>
                  <div className="flex1" />
                  <div className="btn-large primary">
                    <AlignCenter>
                      <h3 className="text-whit padHorz">UPDATE</h3>
                    </AlignCenter>
                  </div>
                  <div className="btn-large danger">
                    <AlignCenter>
                      <h3 className="text-whit padHorz">CANCEL</h3>
                    </AlignCenter>
                  </div>
                </div>
              </div>
            </div>
          : null}
      </div>
    )
  }
}
