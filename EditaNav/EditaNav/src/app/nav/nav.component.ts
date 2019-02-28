import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navItem: Array<string>

  constructor() { }

  ngOnInit() {
    this.navItem = new Array<string>();
  }

  AddClick(){
    this.navItem.push("hola");
    console.log(this.navItem);
  }

  NavClick(text: string){
    console.log(text)
  }
}
