import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: []
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem:Recipe;
  
  //@Output() recipeOnClick = new EventEmitter<Recipe>();
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }
 
  onClick(){
    //this.recipeOnClick.emit(this.recipeItem);
    this.recipeService.pushRecipe(this.recipeItem);
    // lub jesli nie ma obslugi w serwisie (jesli serwis nie ma funkcji ktora emituje przekazane dane)
    //this.recipeService.pushedRecipes.emit(this.recipeItem);
  }
}
