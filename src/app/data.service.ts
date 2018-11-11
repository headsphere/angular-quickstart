import { Injectable } from '@angular/core';
import { createTestCustomers } from './test-data'
import { LoggerService } from './logger.service';
import { Customer} from './models'

@Injectable()
export class DataService {
    constructor(private logger: LoggerService)
    {
    }

    getCustomers()
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
}