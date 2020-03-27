import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { ShoppingListComponent } from './shopping-list.component';

@Component({
  selector: 'app-shoping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styles: [`
  button{ margin-left:5px; }
  button: first-child{ margin-left:0px; }
  `]
})
export class ShoppingListAddComponent implements OnInit, OnChanges {
  @Input() selectedIngredient: Ingredient;
  @Output() cleanSelectIngredient = new EventEmitter();
  isAdd = true;
  
  constructor(private ShoppingListService: ShoppingListService) { }

  ngOnChanges(changes){
    if(changes.selectedIngredient.currentValue == undefined){
      //Add modus
      this.selectedIngredient = {name:null, amount:null, unit:''}
      this.isAdd=true;
    }else{
      //edit Modus
      this.isAdd=false;
    }    
  }
  ngOnInit() {
  }

  onSubmit(formular: NgForm){
 
    const newIngredient = new Ingredient(formular.value.name,formular.value.amount,formular.value.unit);
    if(!this.isAdd){
      //edit Modus
      this.ShoppingListService.editIngredient(this.selectedIngredient,newIngredient);
    }else{
      //add Modus
      this.ShoppingListService.addIngredient(newIngredient);
    }
    this.onClear(formular);
  }

  onClear(formular:NgForm){
    formular.resetForm();
    this.cleanSelectIngredient.emit();
  }
  onDelete(formular: NgForm){
    this.ShoppingListService.deleteIngredient(this.selectedIngredient);
    this.onClear(formular);
  }
}
