import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './features/web/components/contactForm/contactForm.component';

const routes: Routes = [

  { path: '', redirectTo: '/contactForm', pathMatch: 'full' }, 
  { path: 'contactForm', component:ContactFormComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
