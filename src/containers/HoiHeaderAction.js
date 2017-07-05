import { connect } from "react-redux"
import { actionInitFilter } from "../actions"
import HeaderAction from "../components/HeaderAction"

const mapActionToProps = dispatch => ({
  initFilter: () => dispatch(actionInitFilter())
})

export default connect(null, mapActionToProps)(HeaderAction)
