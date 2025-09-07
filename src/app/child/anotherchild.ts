import { Component, output } from "@angular/core";

@Component({
    selector: 'app-anotherchild',
    templateUrl: 'anotherchild.html',
    imports: []
})
export class AnotherChild{
  searchTerm = output<string>();
}