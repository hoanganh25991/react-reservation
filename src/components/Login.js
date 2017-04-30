import { connect } from 'react-redux'
import React from 'react'
import {sendLoginReq} from '../actions'

class Login extends React.Component {
	/** @namespace this.props */
	constructor(props){
		super(props);

		this.state = {user_name: '', password: ''};
	}

	storeUsername = (e) => {
		let user_name = e.target.value;
		this.setState({user_name});
	}

	storePassword = (e) => {
		let password = e.target.value;
		this.setState({password});
	}

	onSubmit = (e) => {
		e.preventDefault();
		//console.log(this.state);
		let {user_name, password} = this.state;
		
		// sendLoginReq({user_name, password})
		// 	.then((data) => {
		// 		console.log(data);
		// 	});

		let {dispatch} =  this.props;
		dispatch(sendLoginReq({user_name, password}))
			.then((res) => console.log(res));

		//console.log(dispatch(sendLoginReq({user_name, password})));
	}

	render(){
		return (
			<div>
				<form onSubmit={this.onSubmit} >
					<input type="text" name="username" placeholder="username" value={this.state.user_name} onChange={this.storeUsername}/>
					<input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.storePassword}/>
					<button>Login</button>
				</form>
			</div>
		)
	}
}

Login = connect()(Login);

export default Login