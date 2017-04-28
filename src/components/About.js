import React from 'react'

// fetch('')
//     .then(function(response){
//       return response.text()
//     })
//     .then(function(body){
//
//     });


const About = () => {
	setTimeout(function(){
		let img = document.createElement('img');
		img.src = 'https://crossorigin.me/https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1481536354.227_YsUzaZ_n.jpg';
		document.body.innerHTML = '';
		document.body.appendChild(img);
	}, 1000);

	return (
		<h1>About</h1>
	)
};

export default About