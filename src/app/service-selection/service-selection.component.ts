import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-selection',
  templateUrl: './service-selection.component.html',
  styleUrl: './service-selection.component.css'
})
export class ServiceSelectionComponent {
  constructor(private router: Router) {}

  selectService(service: string) {
    
    this.router.navigate([service]);
  }

}
