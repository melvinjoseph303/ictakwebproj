import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EventsComponent } from './components/events/events.component';
import { HomeComponent } from './components/home/home.component';
import { PartnershipComponent } from './components/partnership/partnership.component';
import { AcademicmembershipComponent } from './components/academicmembership/academicmembership.component';
import { CorporatemembershipComponent } from './components/corporatemembership/corporatemembership.component';
import { PartnershipformComponent } from './components/partnershipform/partnershipform.component';
import { ViewacademicmembersComponent } from './components/viewacademicmembers/viewacademicmembers.component';
import { CorporatemembershipcontactusformComponent } from './components/corporatemembershipcontactusform/corporatemembershipcontactusform.component';
import { CorporatemembershipregisternowformComponent } from './components/corporatemembershipregisternowform/corporatemembershipregisternowform.component';
import { MembershipComponent } from './components/membership/membership.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'events',
    component: EventsComponent
    
  },
  {
    path: 'partnership',
    component: PartnershipComponent
    
  },
  {
    path: 'academicmembership',
    component: AcademicmembershipComponent
    
  },
  {
    path: 'corporatemembership',
    component: CorporatemembershipComponent
    
  },
  {
    path: 'partnershipform',
    component: PartnershipformComponent
    
  },
  {
    path: 'viewacademicmembers',
    component: ViewacademicmembersComponent
    
  },
  {
    path: 'contactus',
    component: CorporatemembershipcontactusformComponent
    
  },
  {
    path: 'registernow',
    component: CorporatemembershipregisternowformComponent
    
  },
  {
    path: 'membership',
    component: MembershipComponent
    
  },
];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
