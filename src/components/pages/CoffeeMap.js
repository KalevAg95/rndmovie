import React from 'react';
import GoogleMapReact from 'google-maps-react';
import  { Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class CoffeeMap extends React.Component{	
 	

	componentDidMount(props) {
    	navigator.geolocation.getCurrentPosition(
      	position => {
        	const { latitude, longitude } = position.coords;
        	this.setState({
          	userLocation: { lat: latitude, lng: longitude },
          	loading: false
        	});
      	},
      	() => {
        		this.setState({ loading: false });
      		}
    	);
  	}

	render(){
		
		let mapStyle ={
			height:"70%",
			width: "100%",
			marginTop: "4rem",
		}
	
		return(
			<div>
				<Map 
					google={this.props.google} 
					zoom={15} 
					style={mapStyle}
					initialCenter={
						userLocation	
					}
					onReady={this.fetchPlaces}
					visible={false}>
					<Marker/>
				</Map>
			</div>
		);
	}
}


export default GoogleApiWrapper({
	apiKey: ("AIzaSyDLsZCgd-hNiBkIWLM99dEBNBHvDZs5Xug") 
})(CoffeeMap)