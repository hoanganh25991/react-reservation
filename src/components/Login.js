import React from 'react'
import {sendLoginReq} from '../actions'

class Login extends React.Component {
	/** @namespace this.props */
	constructor(props){
		super(props);

		this.state = {username: '', password: ''};
	}

	storeUsername = (e) => {
		let username = e.target.value;
		this.setState({username});
	}

	storePassword = (e) => {
		let password = e.target.value;
		this.setState({password});
	}

	onSubmit = (e) => {
		e.preventDefault();
		//console.log(this.state);
		let {username, password} = this.state;
		
		sendLoginReq({username, password});
	}

	render(){
		return (
			<div>
				<form onSubmit={this.onSubmit} >
					<input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.storeUsername}/>
					<input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.storePassword}/>
					<button>Login</button>
				</form>
			</div>
		)
	}
}

export default Login