import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public httpClient: HttpClient) {
  }

  getWithParams(APIPath: string, params: HttpParams): any {
    return this.httpClient.get(`${environment.apiEndPoint}${APIPath}`, {params});
  }

  get(APIPath: string): any {
    return this.httpClient.get(`${environment.apiEndPoint}${APIPath}`);
  }

  post(APIPath: string, OBJ: any): any {
    return this.httpClient.post(`${environment.apiEndPoint}${APIPath}`, OBJ);
  }
}
