import {Address} from './models';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-address',
  templateUrl: './address.component.html'
})
export class AddressComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }

  @Input()
  address: Address;

  hideAddress = false;

  regions = ['East', 'South', 'North', 'West', 'Midwest']
  states = ['California', 'Jalisco', 'Quebec', 'Illinois']

}
