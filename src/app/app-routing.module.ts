// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{BakeryServiceComponent} from './bakery-service/bakery-service.component';
import{ServiceSelectionComponent} from './service-selection/service-selection.component';
import { FunctionalHallserviceComponent } from './functional-hallservice/functional-hallservice.component';
import { authGuard } from './auth.guard';
import { BikeserviceComponent } from './bikeservice/bikeservice.component';
import { SalonparlourserviceComponent } from './salonparlourservice/salonparlourservice.component';
import { WholesaleservicesComponent } from './wholesaleservices/wholesaleservices.component';
import { GymservicesComponent } from './gymservices/gymservices.component';

const routes: Routes = [
  { path: '', redirectTo: '/select-service', pathMatch: 'full' },
  { path: 'select-service', component: ServiceSelectionComponent },
  { path: 'service1', component: BakeryServiceComponent, canActivate: [authGuard], data: { allowedService: 'service1' } },
  { path: 'service2', component: FunctionalHallserviceComponent, canActivate: [authGuard], data: { allowedService: 'service2' } },
  { path: 'service3', component: BikeserviceComponent, canActivate: [authGuard], data: { allowedService: 'service3' } },
  { path: 'service4', component: SalonparlourserviceComponent, canActivate: [authGuard], data: { allowedService: 'service4' } },
  { path: 'service5', component: WholesaleservicesComponent, canActivate: [authGuard], data: { allowedService: 'service5' } },
  { path: 'service6', component: GymservicesComponent, canActivate: [authGuard], data: { allowedService: 'service6' } },
  // ... other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
