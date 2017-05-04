import React from 'react'

class ClickSound extends React.Component {
	componentDidMount(){
		let click_tack = document.getElementById('audio');

		document.addEventListener('click', () => {
			click_tack.play();
		})
	}
	
	render(){
		return (
			<audio id='audio' src='click-tack.mp3'></audio>
		)
	}
}

export default ClickSound