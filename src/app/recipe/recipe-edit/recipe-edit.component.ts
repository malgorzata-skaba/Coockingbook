import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styles: [`
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
export class RecipeEditComponent implements OnInit, OnDestroy {

  myForm:FormGroup
  private recipeId: any;
  private subscribtion:Subscription;
  private isNew=true;
  private editRecipe: Recipe;

  constructor(private myRecipeService: RecipeService, private myRouter:Router, private myActivetedRoute:ActivatedRoute) {
  } 

  ngOnInit(){

    this.subscribtion = this.myActivetedRoute.params.subscribe(
      params => {
        if(params.hasOwnProperty('id')){
          //bearbeiten Modus
          this.isNew=false;
          this.recipeId = +params['id'];
          this.editRecipe = this.myRecipeService.getRecipe(this.recipeId);
        }else{
          // neue Rezepte erstellen Modus
          this.isNew=true;
          this.editRecipe = null;
        }
      }
    );

    let localName = null;
    let localImagePath = null;
    let localDescription = null;
    let localIngredients =  new FormArray([]);

    if(!this.isNew) {
      //edit Modus
      if(this.editRecipe.hasOwnProperty('ingredients')){
        for(let ingred of this.editRecipe.ingredients){
          localIngredients.push(
            new FormGroup({
              'name': new FormControl(ingred.name, Validators.required),
              'amount':new FormControl(ingred.amount, [Validators.pattern("^[0-9]*$"), Validators.required]),
              'unit':new FormControl(ingred.unit, Validators.required)
            })
          );
        }
      }
      localName = this.editRecipe.name;
      localImagePath = this.editRecipe.imagePath;
      localDescription = this.editRecipe.description;
    }
        
    // neue Rezepte erstellen Modus
    this.myForm = new FormGroup({
      'name': new FormControl(localName, Validators.required),
      'imagePath': new FormControl(localImagePath, Validators.required),
      'description': new FormControl(localDescription, Validators.required),
      'ingredients': localIngredients
        // new FormGroup({
        //   'name': new FormControl('makaron', Validators.required),
        //   'amount': new FormControl('50g', Validators.required),
        // })
    });
  }
  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }

  getFormGroupOfIngredientsArray(){
    return (<FormArray>this.myForm.get('ingredients')).controls;
  }

  onAddNewRecipe(){
    const newRecipe = this.myForm.value;
    if(this.isNew){
      //add new Recipe Modus
      this.myRecipeService.addRecipe(newRecipe);
    }else{
      //edit Recipe Modus
      this.myRecipeService.editRecipe(this.editRecipe,newRecipe);
    }
    this.onNavigateBack();
  }

  onAddIngredient(ingredientName:string, ingredientAmount:string, ingredientUnit:string){

    const newIngredient:FormGroup = new FormGroup({
      'name': new FormControl(ingredientName,Validators.required),
      'amount': new FormControl(ingredientAmount,[Validators.pattern("^[0-9]*$"), Validators.required]),
      'unit': new FormControl(ingredientUnit,Validators.required),
    });
    (<FormArray>this.myForm.get('ingredients')).push(newIngredient);
  }
  onRemoveIngredient(index:number){
    (<FormArray>this.myForm.get('ingredients')).removeAt(index);
  }

  onCancel(){
    this.onNavigateBack();
  }
  private onNavigateBack(){
    this.myRouter.navigate(['/']);
  }
}
