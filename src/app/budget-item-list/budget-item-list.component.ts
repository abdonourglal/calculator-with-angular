import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { BudgetItem } from '../shared/models/budget-item.models';

import { MatSlider } from '@angular/material/slider';
import { EditItemModelComponent } from '../edit-item-model/edit-item-model.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})

export class BudgetItemListComponent implements OnInit {
  @Input() bodgetItem : BudgetItem[];
  @Output() Delet:EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() Updat:EventEmitter<UpdatEvent> =new EventEmitter<UpdatEvent>()
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  delet(item:BudgetItem){
   this.Delet.emit(item);
  }
  onCardclick(item:BudgetItem){
    const dialogRef = this.dialog.open(EditItemModelComponent,{
      width:'580px',
      data:item
    });
    dialogRef.afterClosed().subscribe(result =>{
      if (result){
        
        this.Updat.emit({
          old:item,
          new:result
        })
      }
    })
  }
 
}
 export interface UpdatEvent{
  old:BudgetItem;
  new:BudgetItem;
}