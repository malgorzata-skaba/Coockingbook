import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: [`
  button{margin-right:5px;}
  button:first-child{margin-left:0px;}
  img {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    max-width: 300px;
  
  }
  .img {
    text-align: center;

  }
  `]
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  

  selectedRecipe:Recipe;
  recipeID:number;
  private subscripion:Subscription
  constructor(private recipeService:RecipeService, 
    private shoppingListService: ShoppingListService,
    private activatedRoute:ActivatedRoute,
    private router:Router
    ) { }

  addIngredients(){
    this.shoppingListService.addIngredients(this.selectedRecipe.ingredients);
  }

  onRecipeEdit(){
    this.router.navigate(['/recipe',this.recipeID,'edit']);
  }

  onDelete(){
    this.recipeService.deleteRecipe(this.recipeID);
    this.router.navigate(['/recipe'])
  }

  ngOnInit() {
    this.subscripion =this.activatedRoute.params.subscribe(
        (params:Params) => {
          this.recipeID = +params['id'];
          this.selectedRecipe = this.recipeService.getRecipe(this.recipeID);
        }
    );
  }

  ngOnDestroy(): void {
    this.subscripion.unsubscribe();
  }
}