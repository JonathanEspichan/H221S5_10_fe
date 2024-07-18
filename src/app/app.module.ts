import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContactFormService } from './features/web/components/services/contactForm.service';
import { AgregarContactFormComponent } from './features/web/components/contactForm/agregar-contactForm/agregar-contactForm.component';
import { ContactFormComponent } from './features/web/components/contactForm/contactForm.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    AgregarContactFormComponent,
    ContactFormComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    AppRoutingModule, // Asegúrate de que el módulo de enrutamiento esté importado
    RouterModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot()
  ],
  providers: [
    ContactFormService,
    NgbModal,
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
