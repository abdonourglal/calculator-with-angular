import { Component, OnInit } from '@angular/core';
import { BudgetItem } from '../shared/models/budget-item.models';
import {UpdatEvent} from '../budget-item-list/budget-item-list.component'


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
 bodgetItem : BudgetItem[] = new Array<BudgetItem>()
 TotalBud:number =0;
  constructor() { }

  ngOnInit(): void {
  }
  addItem(newItem:BudgetItem){
  this.bodgetItem.push(newItem);
  this.TotalBud += newItem.amount
  }
  deletItem(item:BudgetItem){
    let index = this.bodgetItem.indexOf(item)
   this.bodgetItem.splice(index , 1)
   this.TotalBud -= item.amount
  }
  UpdatItem(updatevent:UpdatEvent){
      this.bodgetItem[this.bodgetItem.indexOf(updatevent.old)] = updatevent.new;
      this.TotalBud -= updatevent.old.amount;
      this.TotalBud += updatevent.new.amount;
  }
}
