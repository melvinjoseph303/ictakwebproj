import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PartnershipService {
  item={
    name: String,
    email: String,
    phone: String,
    firmname: String,
    address: String,  
    district: String,
    officespace: String,
    outcome: String,
    expectation: String,
    profile: String,
    noofemployees: String
  }
  constructor(private http:HttpClient) { }
  newPartner(item:any)
  {   
    return this.http.post("http://localhost:3000/insertpartner",{"partner":item})
    .subscribe(data =>{console.log(data)})
  }
}
