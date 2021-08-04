import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {PartnershipService} from '../../services/partnershipservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partnershipform',
  templateUrl: './partnershipform.component.html',
  styleUrls: ['./partnershipform.component.css']
})
export class PartnershipformComponent implements OnInit {

  constructor(private fb: FormBuilder,private partnershipService: PartnershipService,private router: Router) { }
  partnerItem={
    name:'',
    email:'',
    phone:'',
    firmname:'',
    address:'',
    district:'',
    officespace:'',
    outcome:'',
    expectation:'',
    profile:'',
    noofemployees:''
  }
  regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9]+).([a-z]{2,3})(.[a-z]{2,3})?$/
  addpartnerform = this.fb.group(
    {
      name: ['', Validators.required],
      email:['', [Validators.required, Validators.email, Validators.pattern(this.regexp)]],
      phone:['', Validators.required],
      firmname:['', Validators.required],
      address:['', Validators.required],
      district:['', Validators.required],
      officespace:['', Validators.required],
      outcome:['', Validators.required],
      expectation:['', Validators.required],
      profile:['', Validators.required],
      noofemployees:['', Validators.required],
    }
  )
  
  ngOnInit(): void {
  }
  AddPartner(){
    this.partnershipService.newPartner(this.partnerItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/partnership']);
  }

}
