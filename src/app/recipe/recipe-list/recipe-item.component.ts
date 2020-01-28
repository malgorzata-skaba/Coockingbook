import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: []
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem:Recipe;
  @Output() recipeOnClick = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
 
  onClick(){
    this.recipeOnClick.emit(this.recipeItem);
  }

}
