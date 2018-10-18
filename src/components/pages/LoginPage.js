import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from "../forms/LoginForm";
import { login } from "../../actions/auth";
import { Link } from "react-router-dom";



class LoginPage extends React.Component{
	//calls login action usign data from form
	submit = data => 
		this.props.login(data).then(()=> this.props.history.push("/"));

	render(){
  
		return(

			<div>
				<h1>Login</h1>	
				<LoginForm submit={this.submit}/>
				<Link to="/home"> Continue without loging</Link>
			</div>

		);
	}
}

LoginPage.propTypes={
	history: PropTypes.shape({
		push:PropTypes.func.isRequired
	}).isRequired,
	login: PropTypes.func.isRequired	
};



export default connect(null, {login})(LoginPage);