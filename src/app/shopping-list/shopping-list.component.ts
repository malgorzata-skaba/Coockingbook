import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: []
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[];
  // ingredients:Ingredient[]= [
  //   new Ingredient("Butter",250,"g"),
  //   new Ingredient("Flour",500,"g"),
  //   new Ingredient("Salt",2,"dram"),
  //   new Ingredient("Pork meat",200,"g")];

  constructor(private shoppingListService:ShoppingListService) {
   }

  ngOnInit() {
   this.ingredients =  this.shoppingListService.getIngredients();
  }
}
