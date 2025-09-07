import { Component, input, model, OnChanges, SimpleChanges } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Person } from "../model";

@Component({
    selector: "app-childhello",
    templateUrl: "./childhello.html",
    imports:[FormsModule]
})
export class ChildHello implements OnChanges{
    filter = input("");
    filteredData: Person[]= [];

    // updateTitle(event: Event): void {
    //     this.title.update(c => (event.target as HTMLInputElement).value);
    // }
    list: Person[] = [{id: 1, name: 'saurabh', address: 'bangalore', email: 'saurabh@gmail.com', phone: '99999'},
                    {id: 2, name: 'John', address: 'california', email: 'John@gmail.com', phone: '2323'},
                    {id: 3, name: 'Shweta', address: 'norway', email: 'norway@gmail.com', phone: '353453'},
                    {id: 4, name: 'Maria', address: 'allahabad', email: 'allahabad@gmail.com', phone: '463242'},
                    {id: 5, name: 'Satvik', address: 'lucknow', email: 'Satvik@gmail.com', phone: '12321'},
                    {id: 6, name: 'Angela', address: 'china', email: 'Angela@gmail.com', phone: '946436'},
                    {id: 7, name: 'Tiger', address: 'moscow', email: 'moscow@gmail.com', phone: '75635'}]
    constructor(){
        // this.list.push(
        //             {id: 1, name: 'saurabh', address: 'bangalore', email: 'saurabh@gmail.com', phone: '99999'},
        //             {id: 2, name: 'John', address: 'california', email: 'John@gmail.com', phone: '2323'},
        //             {id: 3, name: 'Shweta', address: 'norway', email: 'norway@gmail.com', phone: '353453'},
        //             {id: 4, name: 'Maria', address: 'allahabad', email: 'allahabad@gmail.com', phone: '463242'},
        //             {id: 5, name: 'Satvik', address: 'lucknow', email: 'Satvik@gmail.com', phone: '12321'},
        //             {id: 6, name: 'Angela', address: 'china', email: 'Angela@gmail.com', phone: '946436'},
        //             {id: 7, name: 'Tiger', address: 'moscow', email: 'moscow@gmail.com', phone: '75635'}
        // )
      //  this.filterData();
    }
       
    ngOnChanges(changes: SimpleChanges): void {
        if(changes['filter']){
            this.filterData();
        }
    }
    filterData(){
        if (!this.filter) {
        this.filteredData = this.list; // Show all if no filter
      } else {
        this.filteredData = this.list.filter(item =>
          item.name.toLowerCase().includes(this.filter().toLowerCase()));
      }
    }
}