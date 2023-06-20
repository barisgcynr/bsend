import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  {
    path: 'signin',
    loadChildren: () => import('./components/signin/signin.module')
      .then(m => m.SigninModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./components/signup/signup.module')
      .then(m => m.SignupModule)
  },
  {
    path: 'user-files',
    loadChildren: () => import('./components/user-files/user-files.module')
      .then(m => m.UserFilesModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
