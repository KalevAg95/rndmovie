import React from 'react';

class Banner extends React.Component{
	
	render(){

		let divStyle = {
			color: "#ffffff",
			backgroundColor:"#00b3b3",
			fontSize: "1.5rem",
			padding: "1rem",
			paddingLeft:"1em",
			width:"100%",
			height:"3.5rem",			
		}

		return(
			<div  style={divStyle}>  
				<i className="coffee icon"></i>
				Where is my coffee?
			</div>
		);
	}
}

export default Banner;