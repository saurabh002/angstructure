import { Component, OnDestroy, OnInit } from "@angular/core";
import { DataService } from "./dataservice";
import { city, country, state } from "../model";
import { AsyncPipe } from "@angular/common";
import { catchError, map, Observable, Subscription, tap, throwError, toArray } from "rxjs";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'weather_header',
    templateUrl: 'weather_header.html',
    imports: [FormsModule, AsyncPipe]
})

export class WeatherHeader implements OnInit, OnDestroy{
    constructor(private dataService: DataService) {
    //console.log(dataService.getCountries());
    
  }
//   country =  [{countrycode:'', countryname:''}];
//   state =  [{countrycode: '', statecode:'', statename:''}]  ;
//   city =  [{statecode: '', citycode:'', cityname:''}];
  countries: country[] = [];
  states: state[] = [];
  cities: city[] = [];
  
  selectedCountry: string='';
  selectedState: string='';
  selectedCity: string='';
  country$: Observable<country[]> | undefined 
  state$: Observable<state[]> | undefined
  city$: Observable<city[]> | undefined
  private dataSubscription: Subscription | undefined; // To manage the subscription

  ngOnInit(): void {
    //this.dataService.getCountries().subscribe(res=>{this.countries = res;console.log(this.countries)});
    this.country$=this.dataService.getCountries()
       .pipe(tap((res:country[])=>{
        this.countries=res;
        //here you can use 
        console.log(this.countries)
     }))
    //this.getStates('cn');
    //this.getCities('cn', 'fj')
  }

  onCountryChange(){
    this.states = [];
    this.getStates(this.selectedCountry);
    console.log('countrychanged')
  }

  onStateChange(){
    this.cities = [];
    this.getCities(this.selectedCountry, this.selectedState);
  }

  getStates(country: string){
    // this.dataService.getStates(country).subscribe(response => {
    //   this.states = response;
    // })
    this.state$=this.dataService.getStates(this.selectedCountry)
       .pipe(tap((res:state[])=>{
        this.states=res;
        //here you can use 
        console.log(this.states)
     }))
  }

  getCities(countryCode: string, stateCode: string){
    // this.dataService.getCities(countryCode, stateCode).subscribe(response=> {
    //     this.cities = response;
    // })
    this.city$ = this.dataService.getCities(this.selectedCountry, this.selectedState);
    this.city$.subscribe();


    //  this.dataSubscription = this.dataService.getCities(countryCode, stateCode).subscribe(
    //       (data: city[]) => {
    //         this.cities = data; // Assign the emitted data to the component property
    //       },
    //       (error) => {
    //         console.error('Error fetching data:', error);
    //       }
    //     );
  }

  ngOnDestroy(): void {
//         if (this.dataSubscription) {
//           this.dataSubscription.unsubscribe(); // Unsubscribe to prevent memory leaks
//         }
     }
}