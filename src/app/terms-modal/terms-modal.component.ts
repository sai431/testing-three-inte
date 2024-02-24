import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-terms-modal',
  templateUrl: './terms-modal.component.html',
  styleUrls: ['./terms-modal.component.css']
})
export class TermsModalComponent implements OnInit {
  agreedToTerms = false;

  constructor(public dialogRef: MatDialogRef<TermsModalComponent>) {}

  ngOnInit(): void {}

  closeDialog(): void {
    this.dialogRef.close(this.agreedToTerms);
  }
}
