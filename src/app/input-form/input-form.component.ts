// input-form.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent {
  inputData: any = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  };

  saveToFile() {
    const dataToSave = JSON.stringify(this.inputData, null, 2);

    const blob = new Blob([dataToSave], { type: 'application/json' });
    const link = document.createElement('a');

    link.download = 'user_data.json';
    link.href = window.URL.createObjectURL(blob);
    link.click();
  }
}
