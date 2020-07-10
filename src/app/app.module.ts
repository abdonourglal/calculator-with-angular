
import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppComponent } from './app.component'; 
import {MainPageComponent} from './main-page/main-page.component';
import { Routes,RouterModule } from '@angular/router';

import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import { BudgetItemListComponent } from './budget-item-list/budget-item-list.component';
import { BudgetItemCardComponent } from './budget-item-list/budget-item-card/budget-item-card.component';
import { FormsModule} from '@angular/forms';
import { EditItemModelComponent } from './edit-item-model/edit-item-model.component';
import { MatSliderModule} from '@angular/material/slider';
import { MatDialogModule} from '@angular/material/dialog';

 const routes :Routes=[];
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddItemFormComponent,
    BudgetItemListComponent,
    BudgetItemCardComponent,
    EditItemModelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  FormsModule,
  MatSliderModule,
  MatDialogModule,
  BrowserAnimationsModule],

    
   exports:[RouterModule,],
    providers: [],
    entryComponents:[EditItemModelComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

  