import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Dispositif } from "../Models/Dispositif";

@Injectable({
    providedIn: 'root',
  })
  export class DispositifController {

    apiURL = 'http://localhost:3000';

    constructor(private http: HttpClient) {}

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      };

     public getDispositifs(): Observable<Dispositif[]> {
        return this.http.get<Dispositif[]>(this.apiURL + '/dispositifs')
          .pipe(retry(1), catchError(this.handleError));
      }


    public getJSON(): Observable<any> {
        return this.http.get("../../assets/DispositifsJson.json");
    }

    public sendDispositif(dispositifList: Dispositif[]): Observable<any> {
      return this.http.post(this.apiURL + '/dispositifs',{dispositifList})
  }

      handleError(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // Get client-side error
          errorMessage = error.error.message;
        } else {
          // Get server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(() => {
          return errorMessage;
        });
      }
  }