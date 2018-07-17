import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MachineFeatures} from './machine-features';

@Injectable()
export class MachineService {

  constructor(private _http: Http) { }

  getMachinelist(): Observable<MachineFeatures[]> {
    return this._http.get('http://caretrack.azurewebsites.net/api/Machine/CUST01')
                    .pipe(map((response: Response) => <MachineFeatures[]>response.json()));
                  }
  getCustomer(id) {
    return this._http.get('http://caretrack.azurewebsites.net/api/CustomerDetails/Cust01', id)
                    .pipe(map((response: Response) => response.json()));
                  }

  getMachineInformation():  Observable<MachineFeatures[]> {
    return this._http.get('http://caretrack.azurewebsites.net/api/MachineData/1')
    .pipe(map((response:  Response) => <MachineFeatures[]>response.json()));
   }
  // private handleError (error: Response | any) {
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const body = error.json() || '';
  //     const err = body.error || JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Promise.reject(errMsg);
  // }
}
