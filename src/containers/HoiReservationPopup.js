import { connect } from "react-redux"
import { actionEditCustomerInfo, actionUpdatePax } from "../actions"
import {
  actionHidePopup,
  actionUpdatePopupStatus,
  actionAddUp,
  actionUpdateReservation,
  actionUpdateName,
  actionUpdatePaymentStatus,
  actionSendReminder,
  actionShowHideCalendar
} from "../actions"
import ReservationPopup from "../components/ReservationPopup"

const mapStateToProps = ({ popup }) => {
  //console.log(outlet);

  return {
    popup
  }
}

const mapActionToProps = dispatch => ({
  editCustomerInfo: customer_info => dispatch(actionEditCustomerInfo(customer_info)),
  updatePax: (delta, which_pax) => dispatch(actionUpdatePax(delta, which_pax)),
  actionTogglePopup: () => dispatch(actionHidePopup()),
  actionUpdatePopupStatus: status => dispatch(actionUpdatePopupStatus(status)),
  actionAddUp: (addUp, pax) => dispatch(actionAddUp(addUp, pax)),
  actionUpdateReservation: () => dispatch(actionUpdateReservation()),
  actionUpdateName: (name, value) => dispatch(actionUpdateName(name, value)),
  actionUpdatePaymentStatus: payment_status => dispatch(actionUpdatePaymentStatus(payment_status)),
  actionSendReminder: confirm_id => dispatch(actionSendReminder(confirm_id)),
  actionShowHideCalendar: () => dispatch(actionShowHideCalendar())
})

export default connect(mapStateToProps, mapActionToProps)(ReservationPopup)
