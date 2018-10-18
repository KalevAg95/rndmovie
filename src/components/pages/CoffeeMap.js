import React from 'react';
import GoogleMapReact from 'google-maps-react';
import  { Map, Marker, GoogleApiWrapper} from 'google-maps-react';


class CoffeeMap extends React.Component{	
 	
 	
	state = {
		userLocation: { lat: 50, lng: 500 }, 
		loading: true
	};

	componentDidMount(props) {
    	navigator.geolocation.getCurrentPosition(
      		position => {
        		const { latitude, longitude } = position.coords;

        			this.setState({
          			userLocation: { lat: latitude, lng: longitude },
          			loading: false,
          			
        		});
      		}, () => {
        		this.setState({ loading: false });
      		}
    	);
  	}

  	located = (userLocation) => {
  		console.log(userLocation);
  	}

  	

  	fetchPlaces = (mapProps, map) =>{
  		const {google} = mapProps;
  		const service = new window.google.maps.places.PlacesService(map);

  		const request = {
                    location: this.state.userLocation,
                    radius: 5000,
                    type: ['cafe'],
                };

  		service.nearbySearch(request, (results, status) => {
  				console.log(results);

  			}
  		);
  	}	

  	
  			
	render(){

		const {google} =this.props;
		const {loading, userLocation} = this.state;
		
		let mapStyle ={
			height:"70%",
			width: "100%",
			marginTop: "4rem",
		}
	
		if(loading){
			return null;
		}

		return(
			<div>
				<Map 
					className='map'
					google={google} 
					zoom={15}
					style={mapStyle}
					initialCenter={userLocation}
					onReady={this.located, this.fetchPlaces}
					>

				</Map>
			</div>
		);
	}
}


export default GoogleApiWrapper({
	apiKey: ("AIzaSyDLsZCgd-hNiBkIWLM99dEBNBHvDZs5Xug") 
})(CoffeeMap)