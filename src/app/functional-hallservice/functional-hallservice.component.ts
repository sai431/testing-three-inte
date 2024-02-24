import { Component } from '@angular/core';
import{AuthService} from '../auth.service';
import { MatDialog } from '@angular/material/dialog';
import{TermsModalComponent} from '../terms-modal/terms-modal.component'
@Component({
  selector: 'app-functional-hallservice',
  templateUrl: './functional-hallservice.component.html',
  styleUrl: './functional-hallservice.component.css'
})
export class FunctionalHallserviceComponent {
  constructor(private authService: AuthService,private dialog:MatDialog) {}

  ngOnInit() {
    const allowedService = this.authService.getAllowedService();
    if (allowedService !== 'service2') {
      alert('FunctionalHall service selected by user')
    }
  }

  

  openTermsModal(): void {
    const dialogRef = this.dialog.open(TermsModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        alert('User agreed to terms')
        // User agreed to terms, handle accordingly
        console.log('User agreed to terms');
      } else {
        // User did not agree to terms, handle accordingly
        alert('User did not agree to terms');
      }
    });
  }
  logout() {
    this.authService.logout();
  }


}
