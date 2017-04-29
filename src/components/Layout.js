import React from 'react'
import './App.css'

class Layout extends React.Component {
	
	render(){
		const {Top, Left, Right, Bottom} = this.props;
		
		return (
			<div className="Vi">
				<div style={{clear: 'both'}}>
					<Top />
				</div>
				<div style={{float: 'left'}}>
					<Left />
				</div>
				<div style={{float: 'right'}}>
					<Right />
				</div>
				<div style={{clear: 'both'}}>
					<Bottom />
				</div>
			</div>
		)
	}
}

//hello trigger for me
export default Layout