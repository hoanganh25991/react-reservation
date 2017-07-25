import { connect } from "react-redux"
import { actionEditCustomerInfo, actionUpdatePax } from "../actions"
import {
  actionAddUp,
  actionUpdateReservation,
  actionUpdateName,
  actionShowHideCalendar,
  actionHideNewPopup,
  actionUpdatePaymentAmount,
  actionNewReservationPopup
} from "../actions"
import NewReservationPopup from "../components/NewReservationPopup"

const mapStateToProps = state => {
  let { popup, payment_authorization } = state
  return {
    popup,
    payment_authorization
  }
}

const mapActionToProps = dispatch => ({
  editCustomerInfo: customer_info => dispatch(actionEditCustomerInfo(customer_info)),
  updatePax: (delta, which_pax) => dispatch(actionUpdatePax(delta, which_pax)),
  // actionTogglePopup: () => dispatch(actionHidePopup()),
  // actionUpdatePopupStatus: status => dispatch(actionUpdatePopupStatus(status)),
  actionAddUp: (addUp, pax) => dispatch(actionAddUp(addUp, pax)),
  actionUpdateReservation: () => dispatch(actionUpdateReservation()),
  actionUpdateName: (name, value) => dispatch(actionUpdateName(name, value)),
  // actionUpdatePaymentStatus: payment_status => dispatch(actionUpdatePaymentStatus(payment_status)),
  // actionSendReminder: confirm_id => dispatch(actionSendReminder(confirm_id)),
  actionShowHideCalendar: () => dispatch(actionShowHideCalendar()),
  actionHideNewPopup: () => dispatch(actionHideNewPopup()),
  actionUpdatePaymentAmount: () => dispatch(actionUpdatePaymentAmount()),
  actionNewReservationPopup: sms_message_on_reserved => dispatch(actionNewReservationPopup(sms_message_on_reserved))
})

export default connect(mapStateToProps, mapActionToProps)(NewReservationPopup)
