import React from 'react'
import Layout from './Layout'

class Bottom extends React.Component {
	render(){
		return null;
	}
}

class App extends React.Component {
	render(){

		let position = {
			Top:    () => (<h1>App here</h1>),
			Left:   () => {return null},
			Right:  () => {return null},
			Bottom: Bottom,
		}

		return (
			<div>
				<Layout {...position} />
			</div>

		)
	}
}

export default App