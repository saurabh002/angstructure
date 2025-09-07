import { Component, input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { city, weatherReport } from "../model";
import { DataService } from "./dataservice";
import { map, Observable } from "rxjs";
import { AsyncAction } from "rxjs/internal/scheduler/AsyncAction";
import { AsyncPipe, DatePipe, DecimalPipe } from "@angular/common";

@Component({
    selector: 'app-weather',
    templateUrl: 'weather.html',
    imports: [AsyncPipe, DecimalPipe, DatePipe]
})
export class Weather implements OnInit, OnChanges{ 
    report = input<Observable<weatherReport>>();
    weatherReport!: weatherReport
    cityName = input<Observable<string>>();
    newCityName = input('')
    //weatherR$: Observable<weatherReport> | undefined
    
    constructor(private dataService: DataService){
        
    }
    ngOnChanges(changes: SimpleChanges): void {
        // if(changes['cityName']){
        //     //this.newCityName = this.cityName()
        //     this.cityName()?.subscribe(value => {
        //   this.newCityName = value;
        //   console.log(this.newCityName+'endgame')
        // });
        // }
        // if(changes['report']){
        //     this.report()?.pipe(map(c=> this.weatherReport = c)).subscribe(
        //         s=> console.log('jgjg'+this.weatherReport.main.feels_like)
        //     )
        // }
    }

    //weatherReport!: Observable<weatherReport>
    ngOnInit(): void {
        //this.weatherReport = this.report()!
       // console.log('OO '+this.report()?.main.feels_like)
    }
}