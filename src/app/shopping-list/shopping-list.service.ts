import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

    ingredients:Ingredient[]=[];

    getIngredients():Ingredient[]{
        return this.ingredients;
    }

    addIngredients(addedIngredients:Ingredient[]){
        // Array.prototype.push.apply(this.ingredients,addedIngredients);
        addedIngredients.forEach(element => {
            this.ingredients.push(element);
        });
    }
}