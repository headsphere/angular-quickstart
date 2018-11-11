import { Component, OnInit, Input } from '@angular/core';

import { Address} from './models';
import { DataService} from './data.service'

@Component({
  selector: 'my-address',
  templateUrl: './address.component.html'
})
export class AddressComponent implements OnInit {
  constructor(private dataService: DataService) { }

  states: string[];

  ngOnInit(): void {
    this.dataService.getStates().subscribe((states) => {
      this.states = states;
    });
  }

  @Input()
  address: Address;

  hideAddress = false;

  regions = ['East', 'South', 'North', 'West', 'Midwest']
  //states = ['California', 'Jalisco', 'Quebec', 'Illinois']

}
