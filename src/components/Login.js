import React from "react"
import * as c from "../actions/const-name"
import { renderIf } from "../utils"

class Login extends React.Component {
  /**
	 * Suport auto login when user
	 * Submit url with username, password params
	 * @returns {XML}
	 */
  componentDidMount() {
    let { match } = this.props

    //console.log('match here', match)

    let { user_name, password } = match.params

    if (user_name && password) {
      let { updateUser, login } = this.props

      // Update user info first
      updateUser({ user_name, password })

      // Then log him in
      login()

      const { location } = this.props
      // if (location.state && location.state.nextPathname) {
      // 	browserHistory.push(location.state.nextPathname)
      // } else {
      // 	browserHistory.push('/')
      // }
      console.log(location)

      console.log(this.props)
    }
  }

  componentDidUpdate() {
    let { user } = this.props

    let { status } = user

    if (status === c.LOGIN_SUCCESS) {
      let { history } = this.props

      history.push("/reservations")
    }
  }

  render() {
    // Get state
    let { user: { status } } = this.props
    // Get action
    let { login, updateUser } = this.props

    return (
      <div>
        {renderIf(status)(<div>{{ status }}</div>)}

        {renderIf(!status)(
          <form
            onSubmit={e => {
              e.preventDefault()
              login()
            }}
          >
            <input
              type="text"
              placeholder="username"
              value={user.user_name}
              onChange={e => updateUser({ user_name: e.target.value })}
            />
            <input
              type="password"
              placeholder="password"
              value={user.password}
              onChange={e => updateUser({ password: e.target.value })}
            />
            <button>Login</button>
          </form>
        )}
      </div>
    )
  }
}

/**
 * Bind actions to view
 */
import { connect } from "react-redux"

import { actionUpdateUser, actionSendLoginReq } from "../actions"

/**
 * Define which is stateToProps
 * Define which is disptachToProps
 * @param user
 */

const mapStateToProps = ({ user }) => ({ user })

const mapActionToProps = dispatch => {
  return {
    updateUser: user => dispatch(actionUpdateUser(user)),
    login: () => dispatch(actionSendLoginReq())
  }
}

export default connect(mapStateToProps, mapActionToProps)(Login)
