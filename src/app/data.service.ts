import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/do'

import { createTestCustomers } from './test-data'
import { LoggerService } from './logger.service';
import { Customer} from './models'

@Injectable()
export class DataService {
    constructor(private logger: LoggerService)
    {
    }

    getCustomersP() : Promise<Customer[]>
    {
        this.logger.log("Getting customers as a promise");
        let customers = createTestCustomers();
        return new Promise<Customer[]>(resolve => {
            setTimeout(() => {
                this.logger.log(`Got ${customers.length} customers`)
                resolve(customers);
            }, 1500);
        });
       
    }

    getCustomers(): Observable<Customer[]> {
        this.logger.log("Getting customers as observable");
        let customers = createTestCustomers();
        return of(customers)
            .delay(1500)
            .do(() => {
                this.logger.log(`Got ${customers.length} customers`);
            });
    }
}