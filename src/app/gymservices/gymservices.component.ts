import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-gymservices',
  templateUrl: './gymservices.component.html',
  styleUrl: './gymservices.component.css'
})
export class GymservicesComponent {
  constructor(private authService: AuthService,private dialog:MatDialog) {}
  ngOnInit() {
    const allowedService = this.authService.getAllowedService();
    if (allowedService !== 'service6') {
      alert('Gymservices Component by user')
    }
  }

}
