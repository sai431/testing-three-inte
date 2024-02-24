import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-salonparlourservice',
  templateUrl: './salonparlourservice.component.html',
  styleUrl: './salonparlourservice.component.css'
})
export class SalonparlourserviceComponent {
  constructor(private authService: AuthService,private dialog:MatDialog) {}
  ngOnInit() {
    const allowedService = this.authService.getAllowedService();
    if (allowedService !== 'service4') {
      alert('saloon  service selected by user')
    }
  }
}
