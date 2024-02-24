import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-bikeservice',
  templateUrl: './bikeservice.component.html',
  styleUrl: './bikeservice.component.css'
})
export class BikeserviceComponent {
  constructor(private authService: AuthService,private dialog:MatDialog) {}
  ngOnInit() {
    const allowedService = this.authService.getAllowedService();
    if (allowedService !== 'service3') {
      alert('Bike service selected by user')
    }
  }

}
