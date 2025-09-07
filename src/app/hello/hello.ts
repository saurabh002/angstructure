import { Component } from "@angular/core";
import { ChildHello } from "../childhello/childhello";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-hello',
    imports: [ChildHello, FormsModule],
    templateUrl: './hello.html'
})
export class Hello{
 parentTextValue = '';
}