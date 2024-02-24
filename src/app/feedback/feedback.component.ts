import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  feedback: string = '';
  rating: number | undefined;

  submitFeedback(): void {
    // You can handle the submission logic here (e.g., send feedback to the server)
    alert('Feedback:' + this.feedback);
    alert('Rating:'+ this.rating);
    // Reset the form after submission
    this.feedback = '';
    this.rating = undefined;
  }
}
