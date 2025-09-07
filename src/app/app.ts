import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hello } from './hello/hello';
import { Child } from './child/child';
import { FormsModule } from '@angular/forms';
import { ToDo } from './todo/todo';
import { DataService } from './weather/dataservice';
import { WeatherHeader } from './weather/weather_header';
import { WeatherLocation } from './weather/location';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, WeatherHeader, WeatherLocation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  protected readonly title = signal('angstructure');
  searchTerm: string = ''
  /**
   *
   */
  
}
