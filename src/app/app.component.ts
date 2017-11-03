import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Retro Barcode Generator';
  colors = ['Tomato', 'Violet', 'Red', 'Blue', 'Yellow', 'Cyan', 'Green', 'Orange', 'Purple', 'Fuchsia', 'SlateBlue', 'LightGray'];
  rand_colors = [];

  fill_colors() {
    for (let y = 0; y < 10; y++) {
      const r_c = this.colors[Math.floor(Math.random() * this.colors.length)];
      this.rand_colors.push(r_c);
    }
  }

  ngOnInit() {
    this.fill_colors();
  }
}
