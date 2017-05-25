import React from "react"

class Logout extends React.Component {
  componentWillMount() {
    // Get actions from props
    let { logout } = this.props
    // Execute logout right at component mounted
    logout()
  }

  render() {
    // Get state from props
    let { user: { status } } = this.props

    return (
      <div>
        <h1>{status}</h1>
      </div>
    )
  }
}

export default Logout
