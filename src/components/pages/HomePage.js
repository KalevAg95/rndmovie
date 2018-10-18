import React from 'react';
import { Link } from "react-router-dom";
import LoginForm from "../forms/LoginForm";
import CoffeeList from "./CoffeeList";
import CoffeeLocator from "./CoffeeLocator";
import Banner from "./Banner";
import background from '../images/background.jpg';
class HomePage extends React.Component{
	
	render(){

		
		let divStyle = {
    			backgroundImage: "url(" + background + ")",
            	backgroundPosition: 'center',
            	backgroundSize: 'cover',
            	backgroundRepeat: 'noRepeat',
            	color: "#ffffff",
            	width: "100%",
            	height: "100%",
            }
          
  		
  		return(
			
			<div style={divStyle}>
					<Banner/>
					<div class="ui two column doubling stackable grid container">
  						<div class="column">
    						<CoffeeList/>
  						</div>
  						<div class="column">
  							<CoffeeLocator/>
  						</div>
  					</div>
  				
					<center><Link to="/login"> Login</Link></center>

			</div>
			
		);
	}
}

export default HomePage;