


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root',
})

export class APIService {
  selectedModel: any;
  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:6942/api/';

  getService(modelName) {
    return this.http.get(this.baseUrl + modelName).pipe(map(res => {
      return res;
    }));
  }

  addService (model, modelName): Observable<any> {
    console.log(model);
    return this.http.post<any>(this.baseUrl + modelName, JSON.stringify(model), httpOptions).pipe(
      catchError(this.handleError<any>('addService'))
    );
  }

  getServiceById(id: number, modelName) {
    return this.http.get<any>(this.baseUrl + modelName + '/' + id);
  }

  updateService(model, modeId, modelName) {
    return this.http.put(this.baseUrl + modelName + '/' + modeId, model);
  }

  getModelListById(model, modeId, apiName) {
    return this.http.put(this.baseUrl + apiName + '/' + modeId, model);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
