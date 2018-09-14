import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable()

export class ApiService {

  public url;

  constructor( private http: HttpClient ) { }

  public email( form ) {
    this.url = `https://dreamsdocometrue.tv/api/email/knappdev`;
    return this.http.post(this.url, form).toPromise();
  }

}
