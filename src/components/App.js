import React from 'react'
import Layout from './Layout'

import NavaigatorPanel from './NavigatorPanel'
import FilterPanel from './FilterPanel'
import ReservationList from '../containers/ReservationList'



class Bottom extends React.Component {
	render(){
		return null;
	}
}

class App extends React.Component {
	render(){

		return (
			<div>
				<NavaigatorPanel />
				<FilterPanel />
				<ReservationList />
			</div>

		)
	}
}

export default App