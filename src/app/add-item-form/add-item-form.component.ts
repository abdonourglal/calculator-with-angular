import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from '../shared/models/budget-item.models';
import {  } from 'protractor';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {
  @Input() item : BudgetItem 
  @Output() formSubmit : EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  IsNewItem :boolean;
  constructor() { }

  ngOnInit(): void {
    if(this.item){
      this.IsNewItem =false;

    }else{
      this.IsNewItem = true;
      this.item = new BudgetItem('',null)
    }
  }
  OnSubmit(form:NgForm){
   this.formSubmit.emit(form.value);
   form.reset()
  }

}
