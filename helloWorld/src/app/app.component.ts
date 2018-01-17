

import {Component} from "@angular/core";
import {environment} from "../environments/environment";



@Component({
  selector:'app-root',
  templateUrl:'./views/app.component.html'
})


export class AppComponent{
  title="TOUR OF HEROES";

  name =environment.name;

}
