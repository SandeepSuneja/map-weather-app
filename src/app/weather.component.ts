import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'weather',
	templateUrl: 'weather.component.html'
})
export class WeatherComponent {

	private lat;
	private lng;
	private weather: any = [];
	private sub;
	private name;
	private country;
	private desc;
	private temp;
	
	constructor(private route: ActivatedRoute, private http: Http){
		// code to get parameters from URL
		this.sub = this.route.params.subscribe(params => {
            this.lat = params['lat'];
			this.lng = params['lng'];
			this.weather = this.getWeather(this.lat, this.lng);
		});	
	}
	// function to get weather information according to URL parameters
	getWeather(lat,lng){
		let weather;
		this.http.get('http://api.openweathermap.org/data/2.5/weather/?cnt=40&units=metric&APPID=a21999153d8ce9beb63835a655132c73&lat='+lat+'&lon='+lng)
	.subscribe(
		(res:Response) => {
			weather = res.json();
			console.log(weather);
			this.name = weather.name;
			this.country = weather.sys.country;
			this.temp = weather.main.temp;
			this.desc = weather.weather[0].description;
		}
	);
	
	
	}
}