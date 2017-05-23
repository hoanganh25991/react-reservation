import React from 'react'

import '../css/hello-world.css'

class HelloWorld extends React.Component {
	render(){
		let reservation = {confirm_id: 'GHYTGU'};

		return (
			<div>
				<div className="item">
					<h1>test</h1>
					<p>{reservation.confirm_id}</p>
				</div>
			</div>

		)
	}
}

export default HelloWorld