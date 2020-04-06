import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styles: [],
  providers:[],
})
export class RecipeComponent implements OnInit {

  //recipeOnClick:Recipe;
  constructor() { }

  ngOnInit() {
  }

}
