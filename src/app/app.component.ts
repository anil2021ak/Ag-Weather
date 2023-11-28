import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-app';


 

  city:any;
  weatherData:any;

constructor(private weatherService:WeatherService){

}

  ngOnInit(): void {
   
  }

  getWeather(){
    this.weatherService.getWeather(this.city).subscribe(data=>{
      
      this.weatherData = data;
      
      console.log(data);
      this.city="";
      
      
    })
  }


}
