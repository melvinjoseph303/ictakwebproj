import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MembershipService {
item={
  name: String,
  email: String,
  message: String  
}
memberItem={
  name:'',
  address:'',
  website:'',
  head:'',
  nature:'',
  type:'',
  identity:'',
  gstn:'',
  dateofincorporation:'',
  cdname:'',
  phone:'',
  email:'',
  skillset:'',
  noofemployees:'',
  nooffreshers:'',
  noofpatents:'',
  experts:'',
  fresher:'',
  internship:'',
  training:'',
  capstone:'',
  message:''
}
  constructor(private http:HttpClient) { }
  newContact(item:any)
  {   
    return this.http.post("http://localhost:3000/insert",{"contactus":item})
    .subscribe(data =>{console.log(data)})
  }
  newCorporateMember(memberItem:any)
  {   
    return this.http.post("http://localhost:3000/insertcorporatemember",{"corporatemember":memberItem})
    .subscribe(data =>{console.log(data)})
  }
}
