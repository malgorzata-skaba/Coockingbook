import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: [`
  button{
    margin-left:5px; 
  }
  button: first-child{
    margin-left:0px;
  }
  `]
})
export class RecipeDetailComponent implements OnInit {

 // @Input() selectedRecipe:Recipe;
  selectedRecipe:Recipe;
  constructor(private recipeService:RecipeService, private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.recipeService.pushedRecipes.subscribe(
      (pushedRecipe:Recipe)=> this.selectedRecipe = pushedRecipe
    );
  }
  addIngredients(){
    this.shoppingListService.addIngredients(this.selectedRecipe.ingredients);
  }

}
