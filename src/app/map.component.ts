import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { ActivatedRouter, Router } from '@angular/router'

@Component({
	selector: 'map',
	templateUrl: 'map.component.html',
	styleUrls: ['./style.css']
})
export class MapComponent {
	private latitude;
	private longitude;
	constructor(private http: Http){
		//this.getPlaceId()
	}	
	
	// function to find latitude and longitude of destination
	getLatLng(){
		let data;
		let address = (<HTMLInputElement>document.getElementById("destination")).value;
		if(address != '' ){
			//alert((<HTMLInputElement>document.getElementById("destination")).value)
			return(this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&key=AIzaSyBoN4T_u3qL7UyJ0J-scwSoaRdW8f1XmF0'))
			.subscribe(
				(res:Response) => {
					data = res.json();
					console.log(data)
					this.latitude = data.results[0].geometry.location.lat;
					console.log(this.latitude)
					this.longitude = data.results[0].geometry.location.lng;
					console.log(this.longitude);
					
			});
		}	
	}

	
}