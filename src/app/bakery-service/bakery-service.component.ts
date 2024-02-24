import { Component } from '@angular/core';
import{AuthService} from '../auth.service';

@Component({
  selector: 'app-bakery-service',
  templateUrl: './bakery-service.component.html',
  styleUrl: './bakery-service.component.css'
})
export class BakeryServiceComponent {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    const allowedService = this.authService.getAllowedService();
    if (allowedService !== 'service1') {
      alert('Bakery service selected by user')
    }
  }

  logout() {
    this.authService.logout();
  }

}
