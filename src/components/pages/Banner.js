import React from 'react';

class Banner extends React.Component{
	
	render(){

		let divStyle = {
			color: "#ffffff",
			backgroundColor:"#1A1A1A",
			fontSize: "2rem",
			padding: "1.5rem",
			paddingLeft:"1em",
			width:"100%",
			height:"5rem",			
		}

		return(
			<div  style={divStyle}>  
				<i class="coffee icon"></i>
				Where is my coffee?
			</div>
		);
	}
}

export default Banner;