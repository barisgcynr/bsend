import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProSubComponent } from './pro-sub.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ProSubComponent
  }
]

@NgModule({
  declarations: [
    ProSubComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class ProSubModule { }
