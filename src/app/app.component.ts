import { Component } from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  private items: string[];

  constructor(private dataService: DataService){}
  add(data: string){
    this.dataService.setData(data);
  }

  get(){
    this.items = this.dataService.getData();
  }
}
