import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuHidden = false;
  test!:boolean;
  constructor() { }

  ngOnInit() {

  }

  showMenu() {
    this.isMenuHidden = !this.isMenuHidden;
    if(this.isMenuHidden){
      this.test=true;
    }else{
      this.test=false;
    }
  }

}
