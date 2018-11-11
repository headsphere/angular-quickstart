import { Component, OnInit } from '@angular/core';
import {Customer} from './models';
import {DataService} from './data.service'
import { LoggerService } from './logger.service';

@Component({
  moduleId: module.id,
  selector: 'customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.css']
})
export class CustomerListComponent implements OnInit { 

  customer: Customer;
  customers: Customer[];
  isBusy = false;

  constructor(
    private dataService: DataService, 
    private logger: LoggerService) { }

  //lifecycle code
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getCustomers();
  }
  
  getCustomers()
  {
    this.isBusy = true;
    this.logger.log("Getting customers...");
    //this.dataService.getCustomersP().then(custs => {
    this.dataService.getCustomers().subscribe(custs => {
        this.isBusy = false;
      this.customers = custs;
    });
  }

  shift(increment: number)
  {
    let ix = this.customers.findIndex(c => c == this.customer) + increment;
    ix = Math.min(this.customers.length -1, Math.max(0, ix));
    this.customer = this.customers[ix];
  }

}
