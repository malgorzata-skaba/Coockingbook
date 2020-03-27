import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

    // ingredients:Ingredient[]=[];
    ingredients:Ingredient[]= [];

    getIngredients():Ingredient[]{
        return this.ingredients;
    }

    addIngredients(addedIngredients:Ingredient[]){
        // Array.prototype.push.apply(this.ingredients,addedIngredients);
        addedIngredients.forEach(element => {
            this.ingredients.push(element);
        });
    }
    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
    }

    deleteIngredient(ingredient: Ingredient){
        this.ingredients.splice(this.ingredients.indexOf(ingredient),1);
    }
    editIngredient(oldIngredient:Ingredient, newIngredient:Ingredient){
        this.ingredients[this.ingredients.indexOf(oldIngredient)] = newIngredient;
    }
}