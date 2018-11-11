import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'
import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

import { createTestCustomers } from './test-data'
import { LoggerService } from './logger.service';
import { Customer} from './models'

@Injectable()
export class DataService {
    private customerUrl = 'api/customers';
    private statesUrl = 'api/states';
    constructor(private logger: LoggerService, private http: Http)
    {
    }

    getCustomersP() : Promise<Customer[]>
    {
        this.logger.log("Getting customers as a promise via http");

        return this.http.get(this.customerUrl)
            .toPromise()
            .then(response => {
                const custs = response.json().data as Customer[];
                this.logger.log(`Got ${custs.length} customers`)
                return custs;
            }, 
            error => {
                this.logger.log(`Error occurred ${error}`);
                return Promise.reject('Something bad happened in getting customers. Check the console')
            });

        // let customers = createTestCustomers();

        // return new Promise<Customer[]>(resolve => {
        //     setTimeout(() => {
        //         this.logger.log(`Got ${customers.length} customers`)
        //         resolve(customers);
        //     }, 1500);
        // });
       
    }

    getCustomers(): Observable<Customer[]> {
        this.logger.log("Getting customers as observable via Http...");

        return this.http.get(this.customerUrl)
            .map(response => response.json().data as Customer[])
            .do((custs) => {
                this.logger.log(`Got ${custs.length} customers`);this.logger.log(`Got ${custs.length} customers`);
            })
            .catch((error: any) => {
                this.logger.log(`Error occurred ${error}`);
                return Observable.throw('Something bad happened in getting customers. Check the console');
            });
        // let customers = createTestCustomers();
        // return of(customers)
        //     .delay(1500)
        //     .do(() => {
        //         this.logger.log(`Got ${customers.length} customers`);
        //     });
    }

    getStates(): Observable<string[]> {
        this.logger.log("Getting states as observable via Http...");

        return this.http.get(this.statesUrl)
            .map(response => response.json().data as string[])
            .do((states) => {
                this.logger.log(`Got ${states.length} states`);
            })
            .catch((error: any) => {
                this.logger.log(`Error occurred ${error}`);
                return Observable.throw('Something bad happened in getting states. Check the console');
            });

    }
}