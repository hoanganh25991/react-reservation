import React from 'react'

class Login extends React.Component {
	constructor(props){
		super(props)

		console.log('trigger constructor')
	}

	render(){
		// ONLY USE PRIVATE STATE BSC OF INPUT
		// UNBOUNCE IT BY STATE
		//let {user} = this.props;
		console.log('trigger render')

		let {user} = this.props;

		let {login, updateUser} = this.props;

		return (
			<form onSubmit={(e) => {
				e.preventDefault()
				login()
			}} >
				<input type="text" name="username" placeholder="username"
				       value={user.user_name} onChange={(e) => { updateUser({user_name: e.target.value}) }}/>
				<input type="password" name="password" placeholder="password"
				       value={user.password}  onChange={(e) => { updateUser({password:  e.target.value}) }}/>
				<button>Login</button>
			</form>
		)
	}
}

export default Login