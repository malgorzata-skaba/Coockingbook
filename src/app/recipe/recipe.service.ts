import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
// import { EventEmitter } from '@angular/core';

export class RecipeService{

private recipes:Recipe[] = [
    new Recipe(
      "Karkowka w sosie grzybowym",
      "Karkowke gotowac i fertig", 
      "../assets/karkowa.jpg",
      [
        new Ingredient("Buter", 50,"g"),
        new Ingredient("Champinions", 250,"g"),
        new Ingredient("Pork meat", 250,"g"),
        new Ingredient("Cream", 200,"ml"),
        new Ingredient("Salt", 2,"dram"),
        new Ingredient("Pepper", 1,"dram"),
        new Ingredient("Onion", 1,"psc"),
        new Ingredient("Garlic", 1,"clove")
      ]
    ),
    new Recipe(
      "Ziemniaczki", 
      "Niecodzienne zmienaczki",
      "../assets/Potatoes.jpg",
      [
        new Ingredient("Potatoes", 500,"g"),
        new Ingredient("Buter", 50,"g"),
        new Ingredient("Salt", 2,"dram"),
      ]),
    new Recipe(
        "ChiliConCarne", 
        "pycha",
        "../assets/ChiliConCarne.jpg",
        [
          new Ingredient("Meat", 300,"g"),
          new Ingredient("Corn", 100,"g"),
          new Ingredient("Salt", 2,"g"),
          new Ingredient("Tomato sauce", 200,"ml"),
      ]),
  ];
  // pushedRecipes = new EventEmitter<Recipe>();

  getRecpies():Recipe[]{
    return this.recipes;
  }
  getRecipe (id:number):Recipe{
    return this.recipes[id];
  }

  deleteRecipe(id:number){
    this.recipes.splice(id,1);
  }
  addRecipe(newRecipe: Recipe){
    this.recipes.push(newRecipe);
  }
  editRecipe(oldRecipe: Recipe, newRecipe:Recipe){
    let indexOfOldRecipe = this.recipes.indexOf(oldRecipe)
    this.recipes[indexOfOldRecipe] = newRecipe;
  }
  
//   pushRecipe(recipe:Recipe){
//     this.pushedRecipes.emit(recipe);
//   }


}