import { connect } from "react-redux"
import NavigatorPanel from "../components/NavigatorPanel"

const mapStateToProps = ({ outlet_id, allowed_outlets }) => ({
  outlet: allowed_outlets.filter(outlet => outlet.id === outlet_id)[0]
})

//const mapActionToProps = dispatch => ({})

export default connect(mapStateToProps, null)(NavigatorPanel)
