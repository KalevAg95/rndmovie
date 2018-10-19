import React from 'react';
import GoogleMapReact from 'google-maps-react';
import  { Map, Marker, GoogleApiWrapper, InfoWindow, Text} from 'google-maps-react';


class CoffeeMap extends React.Component{	
 	
 	
	state = {
		userLocation: { lat: 50, lng: 500 }, 
		loading: true,
		markers: [],
		markersLoc: [],
		zoom: 15,
		center: { }, 
		

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

  	located = () => {
  		console.log(this.state.userLocation);
  	}
  	//IMPRIMIR MARKERS 

  	

  	fetchPlaces = (mapProps, map) =>{
  		const {google} = mapProps;
  		const service = new window.google.maps.places.PlacesService(map);

  		this.located();
  
  		const request = {
                    location: this.state.userLocation,
                    radius: 5000,
                    type: ['cafe'],
                };

  		service.nearbySearch(request, (results, status) => {
  				console.log(results);
  				var tempResults = [];
  				for (var i = 0; i < results.length; i++){
  					tempResults[i]={lat: results[i].geometry.location.lat(), lng: results[i].geometry.location.lng()};
  				}
  				console.log(tempResults);
  				this.setState({
  						markersLoc: tempResults
  				})
  				this.setState({
  						markers: results
  				})
  				console.log(this.state.markers);
  			}	
  		);
  	}	

	zoomInMap =(id) =>{
		
		for (var i = 0; i < this.state.markers.length; i++){
			if(this.state.markers[i].id===id){
				this.setState({
  					userLocation: this.state.markersLoc[i],
  					zoom: 15  				
  				})
  				console.log(this.state.userLocation);
  				console.log(this.state.zoom);
  			}
  		}



	}
			
	render(){

		const {google} =this.props;
		const {loading, userLocation, zoom} = this.state;
		const markers = this.state.markers || [];

		let listStyle={
			height:"10%",
			width: "100%",
			fontSize: "1rem",
			padding:"1.6rem",
			color: "#ffffff",
			backgroundColor: "#00b3b3",

		}

		let columnStyle1 ={
			backgroundColor: "#00b3b3",
			height:"86%",
			width: "100%",
			marginTop: "4rem",
			overflow: "scroll",
		}

		let columnStyle2 ={
			backgroundColor: "#000000",
			height:"80%",
			width: "100%",
			marginTop: "4rem",
			overflow: "scroll",
		}

		let divStyle = {
			color: "#000000",
			height: "60rem",
			paddingTop:"2rem",
			fontSize:"5rem",
		}
	
		if(loading){
			return null;
		}

		return(
			<div className="ui two column doubling stackable grid container">
				<div className="column">
					<div className="ui left-aligned container" 
						style={divStyle}>
						<center><h1><i class="bullseye icon"></i> Nearest Coffee Shops</h1></center>
							<div style={columnStyle1}>
								{this.state.markers.map((marker, i) =>{
              						return(
                					<div >
                						<div style={listStyle} id={marker.id} onClick={() => this.zoomInMap(marker.id)}>   
                							<h3>{marker.name}</h3>
                							{marker.opening_hours && 
                								<h5>Open Now</h5>                							
                							}   
                							<span>{marker.vicinity}</span>   					
               							</div>
               							     
               							<div className="ui fitted divider" ></div>
               						</div>
              						)
              					})}      
							</div>
					</div>
				</div>

				<div className="column">
					<div className="ui left-aligned container" 
						style={divStyle}>
						<center><h1><i className="map marker alternate icon"></i>Coffee Map</h1></center>
							<Map 								
								google={google}	
								zoom={zoom}
								style={columnStyle2}
								initialCenter={userLocation}
								onReady={this.fetchPlaces}
							>

								{this.state.markers.map((marker, i) =>{
        							return(
       									<Marker
            								key={i}
            								label={marker.name}
            								position={{lat: marker.geometry.location.lat(), lng: marker.geometry.location.lng()}}                  		
         								/>
         							);      
        	 					})}
							</Map>
					</div>
				</div>
			</div> 
		);
	}
}

 



export default GoogleApiWrapper({
	apiKey: ("AIzaSyDLsZCgd-hNiBkIWLM99dEBNBHvDZs5Xug") 
})(CoffeeMap)