import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { TermsModalComponent } from '../terms-modal/terms-modal.component';


interface Item {
  id: number;
  name: string;
  price: number;
  quantity?: number;
}
@Component({
  selector: 'app-availableservice',
  templateUrl: './availableservice.component.html',
  styleUrl: './availableservice.component.css'
})

export class AvailableserviceComponent {
  constructor(private authService: AuthService,private dialog:MatDialog) {}
  items: Item[] = [
    { id: 1, name: 'chain sparking  ', price: 10 },
    { id: 2, name: 'oil change', price: 20 },
    { id: 3, name: 'brake oil', price: 30 },
    // Add more items as needed
  ];

  cart: Item[] = [];

  addToCart(item: Item) {
    if (!item.quantity) {
      item.quantity = 1;
    }
    this.cart.push(item);
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
  
  generateReport() {
    // You can add logic to open a modal, navigate to a new page, or any other way to display the report
    console.log('Generating report:', this.cart);
  }
}
