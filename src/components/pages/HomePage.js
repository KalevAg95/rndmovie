import React from 'react';
import { Link } from "react-router-dom";
import LoginForm from "../forms/LoginForm";
import Banner from "./Banner";
import background from '../images/background.jpg';
import CoffeeMap from "./CoffeeMap";

class HomePage extends React.Component{
	
	render(){

		
		let divStyle = {
    			    
              backgroundColor: "#ffffff",
            	color: "#ffffff",
            	width: "100%",
            	height: "100%",
              overflow: "hidden",
            }
  		
  		return(
			
			<div style={divStyle}>
					<Banner/>

					<CoffeeMap/>
  				
					<center><Link to="/login"> Login</Link></center>

			</div>
			
		);
	}
}

export default HomePage;