import React from 'react'

class Login extends React.Component {
	constructor(props) {
		super(props);

		let {user} = this.props;

		this.state = user;
	}

	onUserNameChange(value){
		this.setState({user_name: value})

		let {updateUser} = this.props;

		let user = {
			user_name: this.state.user_name,
			password: this.state.password
		}

		updateUser(user);
	}

	onPasswordChange(value){
		this.setState({password: value});

		let {updateUser} = this.props;

		let user = {
			user_name: this.state.user_name,
			password: this.state.password
		}

		updateUser(user);
	}

	render(){
		// ONLY USE PRIVATE STATE BSC OF INPUT
		// UNBOUNCE IT BY STATE
		//let {user} = this.props;

		let {login} = this.props;

		return (
			<form onSubmit={(e) => {
				e.preventDefault()
				login()
			}} >
				<input type="text" name="username" placeholder="username"
				       value={this.state.user_name} onChange={(e) => {
					        this.onUserNameChange(e.target.value)
				       }}/>
				<input type="password" name="password" placeholder="password"
				       value={this.state.password}  onChange={(e) => {
				            this.onPasswordChange(e.target.value)
				       }}/>
				<button>Login</button>
			</form>
		)
	}
}

export default Login