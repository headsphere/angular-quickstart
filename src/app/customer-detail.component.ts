import { Component, Input } from '@angular/core';

import {Customer} from './models';

@Component({
  moduleId: module.id,
  selector: 'customer-detail',
  templateUrl: 'customer-detail.component.html',
})
export class CustomerDetailComponent  { 
  @Input()

  customer: Customer;

  hideAddress = false;

  regions = ['East', 'South', 'North', 'West', 'Midwest']
  states = ['California', 'Jalisco', 'Quebec', 'Illinois']

}
