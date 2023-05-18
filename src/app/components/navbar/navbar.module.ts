import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent
  }
]

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
