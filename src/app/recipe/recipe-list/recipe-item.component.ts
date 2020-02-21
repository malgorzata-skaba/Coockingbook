import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: [`
  `]
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem:Recipe;
  @Input() id:number;
 
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }

  // onClick(){
  //   this.recipeService.pushRecipe(this.recipeItem);
  // }

}
