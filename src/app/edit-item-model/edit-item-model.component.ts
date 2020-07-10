import { Component, OnInit, Input, Inject } from '@angular/core';
import { BudgetItem } from '../shared/models/budget-item.models';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-item-model',
  templateUrl: './edit-item-model.component.html',
  styleUrls: ['./edit-item-model.component.scss']
})
export class EditItemModelComponent implements OnInit {
 
  constructor(
    public dialogRef :MatDialogRef<EditItemModelComponent>,
    @Inject(MAT_DIALOG_DATA) public item:BudgetItem
  ) { }

  ngOnInit(): void {
  }
  OnSubmited(UpdatedItem){
    
    this.dialogRef.close(UpdatedItem)
  }

}
