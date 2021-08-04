import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MembershipService} from '../../services/membershipservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-corporatemembershipregisternowform',
  templateUrl: './corporatemembershipregisternowform.component.html',
  styleUrls: ['./corporatemembershipregisternowform.component.css']
})
export class CorporatemembershipregisternowformComponent implements OnInit {

  constructor(private fb: FormBuilder,private membershipService: MembershipService,private router: Router) { }
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
  regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9]+).([a-z]{2,3})(.[a-z]{2,3})?$/
  registernowform = this.fb.group(
    {
      name: ['', Validators.required],
      address:['', Validators.required],
      website:['', Validators.required],
      head:['', Validators.required],
      nature:['', Validators.required],
      type:['', Validators.required],
      identity:['', Validators.required],
      gstn:['', Validators.required],
      dateofincorporation:['', Validators.required],
      cdname:['', Validators.required],
      phone:['', Validators.required],
      email:['', [Validators.required, Validators.email, Validators.pattern(this.regexp)]],
      skillset:['', Validators.required],
      noofemployees:['', Validators.required],
      nooffreshers:['', Validators.required],
      noofpatents:['', Validators.required],
      message:['', Validators.required],
    }
  )

  ngOnInit(): void {
  }
  AddCorporateMember(){
    this.membershipService.newCorporateMember(this.memberItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/corporatemembership']);
  }

}
