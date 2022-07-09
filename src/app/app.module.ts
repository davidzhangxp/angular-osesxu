import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CheckInComponent } from './check-in/check-in.component';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { StoreModule } from '@ngrx/store';

const routes: Routes = [
  {
    path: 'checkin',
    component: CheckInComponent,
  },
  {
    path: '',
    component: AppointmentComponent,
  },
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    CheckInComponent,
    AppointmentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
