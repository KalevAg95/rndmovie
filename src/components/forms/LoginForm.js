import React from 'react';
import { Form, Button } from 'semantic-ui-react';


class LoginForm extends React.Component{

	state={
		data: {
			email:'',
			password:''
		},

		loading: false,
		errors: {}
	}


	onChange = e => this.setState({
		data:{...this.state.data, [e.target.name]:e.target.value}
	});

	render(){

		return(

			<Form>
				<Form.Field>
				  <label htmlFor="email">E-mail</label>
				  <input
				  	type="email"
				  	id="email"
				  	name="email"
				  	placeholder="example@example.com"
				  	value={this.state.data.email}
				  	onChange={this.onChange}
				  	/>
				</Form.Field>

				<Form.Field>
				  <label htmlFor="password">password</label>
				  <input
				  	type="password"
				  	id="password"
				  	name="password"
				  	placeholder="********"
				  	value={this.state.data.password}
				  	onChange={this.onChange}
				  	/>
				</Form.Field>	
				<Button primary> Login</Button>
			</Form>

		);
	}
}


export default LoginForm;