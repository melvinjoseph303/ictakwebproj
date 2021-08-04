import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MembershipService} from '../../services/membershipservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-corporatemembershipcontactusform',
  templateUrl: './corporatemembershipcontactusform.component.html',
  styleUrls: ['./corporatemembershipcontactusform.component.css']
})
export class CorporatemembershipcontactusformComponent implements OnInit {

  constructor(private fb: FormBuilder,private membershipService: MembershipService,private router: Router) { }
  contactItem={
    name:'',
    email:'',
    message:''
  }
  regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9]+).([a-z]{2,3})(.[a-z]{2,3})?$/
  contactusform = this.fb.group(
    {
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.regexp)]],
      message: ['', Validators.required],
    }
  )

  ngOnInit(): void {
  }
  AddCorporateMembershipContact(){
    this.membershipService.newContact(this.contactItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/corporatemembership']);
  }

}
