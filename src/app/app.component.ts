import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng9-qrcode-example';
  qrdata = 'Initial QR code data string';

  changeValue(newValue: string): void {
    this.qrdata = newValue;
  }
}
