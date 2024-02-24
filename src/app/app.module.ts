import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { BakeryServiceComponent } from './bakery-service/bakery-service.component';
import { FunctionalHallserviceComponent } from './functional-hallservice/functional-hallservice.component';
import { ServiceSelectionComponent } from './service-selection/service-selection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TermsModalComponent } from './terms-modal/terms-modal.component';
import { FormsModule } from '@angular/forms';
import { FeedbackComponent } from './feedback/feedback.component';
import { BikeserviceComponent } from './bikeservice/bikeservice.component';
import { AvailableserviceComponent } from './availableservice/availableservice.component';
import { SalonparlourserviceComponent } from './salonparlourservice/salonparlourservice.component';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';
import { WholesaleservicesComponent } from './wholesaleservices/wholesaleservices.component';
import { InputFormComponent } from './input-form/input-form.component';
import { GymservicesComponent } from './gymservices/gymservices.component';

@NgModule({
  declarations: [
    AppComponent,
    BakeryServiceComponent,
    FunctionalHallserviceComponent,
    ServiceSelectionComponent,
    TermsModalComponent,
    FeedbackComponent,
    BikeserviceComponent,
    AvailableserviceComponent,
    SalonparlourserviceComponent,
    SeatBookingComponent,
    WholesaleservicesComponent,
    InputFormComponent,
    GymservicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
