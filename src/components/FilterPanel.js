import React from 'react'

class FilterPanel extends React.Component {
	render(){
		return(
			<div className="flex-row bg-dark-blue">
				<div>
					<h3 className="text-whit pad-large filter-selected">TODAY</h3>
				</div>
				<div>
					<h3 className="text-whit pad-large">TOMORROW</h3>
				</div>
				<div>
					<h3 className="text-whit pad-large">NEXT 3 DAYS</h3>
				</div>
				<div>
					<h3 className="text-whit pad-large">NEXT 7 DAYS</h3>
				</div>
				<div>
					<h3 className="text-whit pad-large">NEXT 30 DAYS</h3>
				</div>
				<div>
					<h3 className="text-whit pad-large">PICK A DATE</h3>
				</div>
				<div className="flex1"></div>
				<div>
					<h3 className="text-whit pad-large bg-yell">FILTER</h3>
				</div>
			</div>
		)
	}
}

export default FilterPanel