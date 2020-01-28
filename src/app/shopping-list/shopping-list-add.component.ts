import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styles: [`
  button{
    margin-left:5px; 
  }
  button: first-child{
    margin-left:0px;
  }
  `]
})
export class ShoppingListAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
