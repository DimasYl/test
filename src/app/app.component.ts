import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = 0

  get cannotDecrease() {
    return this.counter <= 0
  }

  increment() {
    this.counter++
  }

  decrement() {
    this.counter--
  }

  reset() {
    this.counter = 0
  }

}
