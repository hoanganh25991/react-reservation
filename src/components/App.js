import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Layout from './Layout'

class App extends React.Component {
	render(){

		let position = {
			Top: () => (<h1>App here</h1>),
			Left: AddTodo,
			Right: VisibleTodoList,
			Bottom: Footer
		}

		return (
			<div>
				<Layout {...position} />
			</div>

		)
	}
}

export default App