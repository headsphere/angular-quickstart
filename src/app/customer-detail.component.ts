import { Component, Input, Output, EventEmitter } from '@angular/core';

import {Customer} from './models';

@Component({
  moduleId: module.id,
  selector: 'customer-detail',
  templateUrl: 'customer-detail.component.html',
})
export class CustomerDetailComponent  { 
  @Input()
  customer: Customer;

  @Output()
  shift = new EventEmitter<number>();

  showAddress = true;

  left()
  {
      this.shift.emit(-1);
      console.debug("shift left")
  }
  right()
  {
      this.shift.emit(1);
      console.debug("shift right")
  }
}
