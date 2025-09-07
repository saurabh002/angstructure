import { Component, OnInit } from "@angular/core";
import { map, Observable, of, Subject } from "rxjs";
import { city, country, state, weatherReport } from "../model";
import { DataService } from "./dataservice";
import { AsyncPipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Weather } from "./weather";

@Component({
    selector: 'app-location',
    templateUrl: 'location.html',
    imports: [AsyncPipe, FormsModule, Weather]
})
export class WeatherLocation implements OnInit{
    countries$: Observable<country[]> | undefined
    states$: Observable<state[]> | undefined
    cities$: Observable<city[]> | undefined
    selectedCountry: string = '-1'
    selectedState: state = {
        name: "",
        isoCode: "",
        countryCode: "",
        latitude: "",
        longitude: ""
    }
    selectedCity: city ={
        name: "",
        countryCode: "",
        stateCode: "",
        latitude: "",
        longitude: ""
    }; 
    selectedCityName: string = ''
   // selectedCity$: Observable<string> | undefined
    weatherR$: Observable<weatherReport> | undefined
    //myStringSubject = new Subject<string>();
    selectedCity$: Observable<string> | undefined;

    weatherReport: weatherReport={
        main: {
            temp: 0,
            feels_like: 0,
            temp_min: 0,
            temp_max: 0
        },
        weather: [],
        sys: {
            sunrise: 0,
            sunset: 0
        }
    }

    constructor(private dataService: DataService){

        //this.selectedCity.name = '-1'
    }

    ngOnInit(): void {
       this.countries$ = this.dataService.getCountries();
       this.countries$.subscribe();
    }
    onCountryChanged(){
        this.getStates();
        this.selectedState.isoCode = '-1'
        this.cities$ = new Observable<city[]>()
        this.selectedCity.name = '-1'
    }

    onStateChanged(){
        this.getCities();
        this.selectedCity.name = '-1'
    }
onCityChanged(selectedCity : city){
console.log(selectedCity);
}
    getStates(){
        this.states$ = this.dataService.getStates(this.selectedCountry);
        this.states$.subscribe()
    }

    getCities(){
        this.cities$ = this.dataService.getCities(this.selectedCountry, this.selectedState.isoCode)
        this.cities$.subscribe(c=>c.forEach(x=>console.log(x)))
    }

    searchWeather(lat: string, long: string){
        console.log(this.selectedCity.name+'start')
        if(!this.selectedCity.name || this.selectedCity.name == '-1'){
            let la: state[] = []
            console.log(this.selectedCountry+' s '+this.selectedState.isoCode)
            this.states$?.pipe(map(res=>la = res.filter(f=>f.countryCode.toLowerCase()==this.selectedCountry.toLowerCase() && f.isoCode.toLowerCase() == this.selectedState.isoCode.toLowerCase()))).subscribe(
                s=> {
                    this.weatherR$ = this.dataService.getWeather(la[0].latitude, la[0].longitude)
                    this.weatherR$.subscribe()
                    this.selectedCityName = la[0].name
                })
            
            //console.log(la)
            //this.weatherR$ = this.dataService.getWeather(la[0].latitude, la[0].longitude);
            //this.selectedCityName = la[0].name;
        }else{
            this.weatherR$ = this.dataService.getWeather(this.selectedCity.latitude, this.selectedCity.longitude);
            this.selectedCityName = this.selectedCity.name;
        }
        //this.myStringSubject.next(this.selectedCity.name);

        //this.selectedCity$.subscribe(s=>console.log('as'+s))
        // this.weatherR$.pipe((map(w=>{
        //     console.log(w.main.feels_like)
        //     this.weatherReport = w;
        //     console.log("sun"+w.sys.sunrise)
        //     console.log('Q '+this.weatherReport.main.feels_like)
        //     w.weather.map(
        //         r=>
        //             {
        //                 console.log('t'+r.description)
        //             }
        //         )
        //     }))
        // )
        // .subscribe()

        // this.weatherR$.pipe((map(w=>{
        //     console.log('k '+w.main)
        //     this.weatherReport = w


        //     }))
        // )
        // .subscribe()
        //this.weatherR$.subscribe();
    }
    
}