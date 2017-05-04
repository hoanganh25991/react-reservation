import React from 'react'

class ResvCustomerRemark extends React.Component {
	render(){
		let {customer_remarks} = this.props;

		return(
			<div>
				<h3 className="text-gray">To find what the font size of the H1 element will be, we need to know</h3>
				<h3 className="text-yell">To find what the font size of the H1 element will be, we need to know</h3>
			</div>
		)
	}
}

export default ResvCustomerRemark