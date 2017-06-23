import { connect } from "react-redux"
import { actionEditCustomerInfo, actionUpdatePax } from "../actions"
import { actionHidePopup, actionUpdatePopupStatus, actionAddUp } from "../actions"
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
  actionAddUp: (addUp, pax) => dispatch(actionAddUp(addUp, pax))
})

export default connect(mapStateToProps, mapActionToProps)(ReservationPopup)
