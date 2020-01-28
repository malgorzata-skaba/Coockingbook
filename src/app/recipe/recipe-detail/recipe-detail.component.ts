import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

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

  @Input() selectedRecipe:Recipe;
  constructor() { }

  ngOnInit() {
  }

}
