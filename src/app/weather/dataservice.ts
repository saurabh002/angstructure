import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { city, country, state, weatherReport } from "../model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataService{
    constructor(private http: HttpClient){
        //console.log(this.getStates('us'));
    }

    getCountries(){
        return this.http.get<country[]>('https://country-state-city-search-rest-api.p.rapidapi.com/allcountries',{headers:{
                'x-rapidapi-key': '873542fa87msh2eaa8b6b5a72e14p1ab8c2jsnde1ece6b1462',
                'x-rapidapi-host': 'country-state-city-search-rest-api.p.rapidapi.com'
        }});
    }

    getStates(countryCode: string){
        let params = new HttpParams().set("countrycode",countryCode)
        return this.http.get<state[]>('https://country-state-city-search-rest-api.p.rapidapi.com/states-by-countrycode', {params: params, headers: {
                'x-rapidapi-key': '873542fa87msh2eaa8b6b5a72e14p1ab8c2jsnde1ece6b1462',
                'x-rapidapi-host': 'country-state-city-search-rest-api.p.rapidapi.com'
        }})
    }

    getCities(countryCode: string, stateCode: string){
        let params = new HttpParams().set("statecode", stateCode).set("countrycode", countryCode);
        return this.http.get<city[]>('https://country-state-city-search-rest-api.p.rapidapi.com/cities-by-countrycode-and-statecode', {params: params, headers: {
            'x-rapidapi-key': '873542fa87msh2eaa8b6b5a72e14p1ab8c2jsnde1ece6b1462',
            'x-rapidapi-host': 'country-state-city-search-rest-api.p.rapidapi.com'
        }})
    }

    getWeather(lan: string, long: string){
        let params = new HttpParams().set("lat", lan).set("lon", long).set("appid", 'db99c274d1222611ea484bc34adc1deb')
        return this.http.get<weatherReport>('https://api.openweathermap.org/data/2.5/weather', {params: params})
    }
}