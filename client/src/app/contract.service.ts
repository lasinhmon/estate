import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contract } from './contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private baseURL='http://localhost:8080/batdongsan/ContractController';
  constructor(private httpClient:HttpClient) { }
  public getContractsList(): Observable<Contract[]>{
    return this.httpClient.get<Contract[]>(`${this.baseURL}`);
  }
  public getContractById(id: number): Observable<Contract>{
    return this.httpClient.get<Contract>(`${this.baseURL}/${id}`);
  }
  public postContract(contract:Contract): Observable<Object>{
    //console.log(estate)
    return this.httpClient.post(`${this.baseURL}`, contract);
  }
}
