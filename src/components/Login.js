import React from 'react'

class Login extends React.Component {
	render(){
		let {user} = this.props;
		let {updateUser, login} = this.props;

		return (
			<form onSubmit={(e) => {
				e.preventDefault()
				login(user)
			}} >
				<input type="text" name="username" placeholder="username"
				       value={user.user_name} onChange={(e) => updateUser({user_name: e.target.value})}/>
				<input type="password" name="password" placeholder="password"
				       value={user.password}  onChange={(e) => updateUser({password:  e.target.value})}/>
				<button>Login</button>
			</form>
		)
	}
}

export default Login