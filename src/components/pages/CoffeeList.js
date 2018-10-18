import React from 'react';

class CoffeeList extends React.Component{
	
	render(){

		let divStyle = {
			color: "#ffffff",
			height: "50rem",
			paddingTop:"2rem",
		}

		return(
			<div class="ui left-aligned container" style={divStyle}>
				<center><h2>Nearest Coffee Shops</h2></center>
			
			</div>
		);
	}
}

export default CoffeeList;