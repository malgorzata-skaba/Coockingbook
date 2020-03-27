import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: []
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[];
  selectedIngredientP:Ingredient;

  constructor(private shoppingListService:ShoppingListService) {
  }

  ngOnInit() {
   this.ingredients =  this.shoppingListService.getIngredients();
  }
  onSelectItem(ingred: Ingredient){
    this.selectedIngredientP = ingred;
  }
  onClearSelectedIngredient(){
    this.selectedIngredientP = null;
  }
}
