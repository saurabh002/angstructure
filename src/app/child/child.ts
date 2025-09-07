import { Component, input, OnChanges, SimpleChanges } from "@angular/core";
import { Person } from "../model";

@Component({
    templateUrl: 'child.html',
    selector: 'app-child',
    imports: []
})
export class Child implements OnChanges{
    searchFilter = input('');
    list: Person[] = [{id: 1, name: 'saurabh', address: 'bangalore', email: 'saurabh@gmail.com', phone: '99999'},
                    {id: 2, name: 'John', address: 'california', email: 'John@gmail.com', phone: '2323'},
                    {id: 3, name: 'Shweta', address: 'norway', email: 'norway@gmail.com', phone: '353453'},
                    {id: 4, name: 'Maria', address: 'allahabad', email: 'allahabad@gmail.com', phone: '463242'},
                    {id: 5, name: 'Satvik', address: 'lucknow', email: 'Satvik@gmail.com', phone: '12321'},
                    {id: 6, name: 'Angela', address: 'china', email: 'Angela@gmail.com', phone: '946436'},
                    {id: 7, name: 'Tiger', address: 'moscow', email: 'moscow@gmail.com', phone: '75635'}]

    filteredList: Person[] = [];

    ngOnChanges(changes: SimpleChanges): void {
        if(changes['searchFilter']){
            if(!this.filteredList)
                this.filteredList = this.list;
            else{
                this.filteredList = this.list.filter(d=>d.name.toLowerCase().includes(this.searchFilter().toLowerCase()))
            }
        }
    }
}