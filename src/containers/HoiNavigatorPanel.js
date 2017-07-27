import { connect } from "react-redux"
import NavigatorPanel from "../components/NavigatorPanel"
import {
  actionSendLogoutReq,
  actionInitFilter,
  actionSearchReservation,
  actionPrintReservation,
  actionReloadFilterByDay,
  actionShowHideNewPopup
} from "../actions"

// const mapStateToProps = ({ user }) => ({ user })
const mapStateToProps = ({ outlet_id, allowed_outlets, user }) => ({
  outlet: allowed_outlets.filter(outlet => outlet.id === outlet_id)[0],
  user
})

//const mapActionToProps = dispatch => ({})
const mapActionToProps = dispatch => ({
  logout: () => dispatch(actionSendLogoutReq()),
  initFilter: () => dispatch(actionInitFilter()),
  actionSearchReservation: confirm_id => dispatch(actionSearchReservation(confirm_id)),
  actionPrintReservation: () => dispatch(actionPrintReservation()),
  actionReloadFilterByDay: () => dispatch(actionReloadFilterByDay()),
  actionShowHideNewPopup: () => dispatch(actionShowHideNewPopup())
})

export default connect(mapStateToProps, mapActionToProps)(NavigatorPanel)
