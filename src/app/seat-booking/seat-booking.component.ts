import { Component } from '@angular/core';

@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.css']
})
export class SeatBookingComponent {
  availableSeats = [
    { id: 1, booked: false },
    { id: 2, booked: false },
    { id: 3, booked: false },
    { id: 4, booked: false },
    { id: 5, booked: false }
  ];

  isAdmin = false; // Set this to true if the user is an admin

  bookSeat(seat: any): void {
    seat.booked = true;
  }

  unbookSeat(seat: any): void {
    if (this.isAdmin) {
      seat.booked = false;
    }
  }
}
