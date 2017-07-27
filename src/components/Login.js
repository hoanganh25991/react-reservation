import React from "react"
import * as c from "../actions/const-name"
//import { renderIf } from "../utils"

class Login extends React.Component {
  /**
	 * Suport auto login when user
	 * Submit url with username, password params
	 * @returns {XML}
	 */
  componentDidMount() {
    // match is url parser
    // Which help determine where we are
    let { match } = this.props

    let { user_name, password } = match.params

    if (user_name && password) {
      // Ok, login him in
      let { updateUser, login } = this.props
      // Update user info first
      updateUser({ user_name, password })
      // Then log him in
      login()
    }
  }

  componentDidUpdate() {
    let { user } = this.props
    let { status } = user
    // If user alreday login, redirect to reservation page
    if (status === c.LOGIN_SUCCESS) {
      let { history } = this.props
      history.push("/reservations")
    }
  }

  render() {
    // Get state
    let { user, user: { status } } = this.props
    // Get action
    let { login, updateUser } = this.props

    return (
      <div>
        {/* <h1>{status}</h1> */}

        {status != c.LOGIN_SUCCESS
          ? <form
              onSubmit={e => {
                e.preventDefault()
                login()
              }}
            >
              <input
                type="text"
                placeholder="username"
                value={user.user_name || ""}
                onChange={e => updateUser({ user_name: e.target.value })}
              />
              <input
                type="password"
                placeholder="password"
                value={user.password || ""}
                onChange={e => updateUser({ password: e.target.value })}
              />
              <button>Login</button>
            </form>
          : null}
      </div>
    )
  }
}

export default Login
