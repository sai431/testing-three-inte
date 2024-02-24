import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-wholesaleservices',
  templateUrl: './wholesaleservices.component.html',
  styleUrl: './wholesaleservices.component.css'
})
export class WholesaleservicesComponent {
  constructor(private authService: AuthService,private dialog:MatDialog) {}
  ngOnInit() {
    const allowedService = this.authService.getAllowedService();
    if (allowedService !== 'service5') {
      alert('WholesaleservicesComponentselected by user')
    }
  }
}
