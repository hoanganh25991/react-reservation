import React from 'react'

import './ReservationPopupLayout.css'

import AlignText  from './helpers/AlignText'

import Remarks from './ResvRemarks'

class ReservationPopupLayout extends React.Component {
	render() {

		return (
			<div className="full">
				<div className="self-center">
					{
						/**
						 * Header
						 * [Confirm Id][Status]     [Hours before]
						 */
					}
					<div className="flex-row header">
						<div className="flex-column">
							<AlignText className="confirm-id padHorz">
								PG3XND2
							</AlignText>
						</div>
						<div className="flex-column">
							<AlignText className="status text-gree">
								CONFIRMED !^
							</AlignText>
						</div>
						<div className="flex-column flex1">
							<div className="flex-row-reverse">
								<div>
									<div><h1 className="text-whit">05:06:35:59</h1></div>
									<div><h3 className="text-gray">days hours minutes seconds</h3></div>
								</div>
								<div className="flex-column">
									<AlignText className="text-whit">
										O
									</AlignText>
								</div>
							</div>
						</div>
					</div>
					{
						/**
						 * Body
						 * [Customer]   [Remarks]
						 * [Pax]        [Remarks]
						 * [Date]       [Payment void|charge]
						 */
					}
					<div className="flex-column body" style={{padding: '30px 50px'}}>
						<div className="flex-row">
							{
								/**
								 * For right side
								 */
							}
							<div style={{flex: 1.2}} className="flex-column">
								<h4 className="text-gray">CUSTOMER</h4>
								{
									/**
									 * Customer info
									 */
								}
								<div className="flex-row">
									{
										/**
										 * For customer label: Name, Phone, Email
										 */
									}
									<div className="flex-column" style={{width: '150px'}}>
										<h4 className="text-whit flex1">NAME</h4>
										<h4 className="text-whit flex1">PHONE</h4>
										<h4 className="text-whit flex1">EMAIL</h4>
									</div>
									{
										/**
										 * For customer value: Torin Nguyen, +65 903865657, torinnguyen@gmail.com
										 */
									}
									<div className="flex1">
										<div className="flex-column">
											<div className="flex1">
												<h3 className="text-blue highlight">Torin Nguyen Torin Nguyen orin
													Nguyen</h3>
											</div>
											<div className="flex1 flex-row">
												<h3 className="text-blue highlight" style={{width: '50px'}}>+65</h3>
												<p></p>
												<h3 className="text-blue highlight flex1">903865657</h3>
											</div>
											<div className="flex1">
												<h3 className="text-blue highlight flex1">toringnguyen@gmail.com</h3>
											</div>
										</div>
									</div>
								</div>
								<br/>
								<br/>
								{
									/**
									 * Pax Info
									 */
								}
								<h4 className="text-gray">PAX</h4>
								<div className="flex-row">
									<div className="flex-column" style={{width: '150px'}}>
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
											<span className="h3 text-whit">23</span>
											<button className="highlight text-blue">+</button>

										</div>
										<div className="flex1">
											<button className="highlight text-blue">-</button>
											<span className="h3 text-whit">23</span>
											<button className="highlight text-blue">+</button>
										</div>
									</div>
								</div>
								<br/>
								<br/>
							</div>
							{
								/**
								 * For left side
								 */
							}
							<div style={{flex: 1}} className="flex-column">
								{
									/**
									 * Customer remarks
									 */
								}
								<h4 className="text-gray">CUSTOMER REMARKS</h4>
								<Remarks />
								<br/>
								<br/>
								<h4 className="text-gray">STAFF REMARKS</h4>
								<Remarks />
								<br/>
								<br/>
							</div>
						</div>
						<div className="flex-row">
							<div style={{flex: 1.2}} className="flex-column">
								<div className="flex-row">
									<div className="flex1">
										<div className="flex-column">
											<h4>DATE & TIME</h4>
											<div className="flex-row">
												<div>
													<h3 className="text-whit">31 Apr 2014</h3>
													<h3 className="text-whit">20:30</h3>
												</div>
												<div className="flex1">
													<AlignText>
														<div className="calendar highlight"></div>
													</AlignText>
												</div>
											</div>
										</div>
									</div>
									<div className="flex1">
										<div className="flex-column">
											<h4 className="text-gray">REMINDER SMS</h4>
											<div className="flex-row">
												<div className="checkbox highlight"></div>
												<p></p>
												<h4 className="text-whit">Enabled</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="flex-column flex1">
								<div className="flex-row">
									<div className="flex1">
										<div className="flex-column">
											<h3 className="text-gray">PAYMENT AUTHORIZATION</h3>
											<h3 className="text-blue">$128 Authorized</h3>
											<h3 className="text-blue">76HYUJ89KJU</h3>
										</div>
									</div>
									<div className="flex-column">
										<div className="flex-row btn-large danger">
												<AlignText className="flex1">
													<h3 className="text-whit padHorz">VOID</h3>
												</AlignText>
										</div>
										<div className="flex-row btn-large primary">
											<div className="flex-column">
												<AlignText>
													<h3 className="text-whit padHorz">CHARGE</h3>
												</AlignText>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{
							/**
							 * Fotter
							 * [SEND REMINDER] [CANCEL][UPDATE]
							 */
						}
					</div>
					<div className="flex-row footer">
						<div className="flex-column">
							<AlignText>
								<div className="btn-large default">
									<AlignText>
										<h3 className="text-whit">SEND REMINDER</h3>
									</AlignText>
								</div>
							</AlignText>
						</div>
						<div className="flex1 flex-column">
							<AlignText>
								<div className="flex-row-reverse">
									<div className="btn-large primary">
										<AlignText>
											<h3 className="text-whit padHorz">UPDATE</h3>
										</AlignText>
									</div>
									<div className="btn-large danger">
										<AlignText>
											<h3 className="text-whit padHorz">CANCEL</h3>
										</AlignText>
									</div>
								</div>
							</AlignText>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ReservationPopupLayout