import { Injectable } from '@angular/core';
import { Team } from 'src/app/models/team'

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamMembers : Team[] = [
    new Team('Tony Thomas', 'Chairman' , 'He is the Chairman' ),
    new Team('Santhosh', 'CEO' , 'He is the CEO' ),
    new Team('Mr. Gopinathan Nair', ' Head-Finance & Admin' , 'He is the CEO' , 'https://i2.wp.com/ictkerala.org/wp-content/uploads/2019/10/GOPI1.jpg?w=250&ssl=1'),
    new Team('Dr. Manoj A S', 'Head – Corporate Operating Unit' , 'He is the CEO' , 'https://i0.wp.com/ictkerala.org/wp-content/uploads/2019/10/manoj.jpg?w=250&ssl=1'),
    new Team('Mr. Nidhin Das ', 'Company Secretary & Lead – HR' , 'He is the CEO' , 'https://i2.wp.com/ictkerala.org/wp-content/uploads/2019/10/nidhin.jpg?w=250&ssl=1'),
    new Team('Mr. Riji N Das', 'Head – Knowledge Officer' , 'He is the CEO' , 'https://i2.wp.com/ictkerala.org/wp-content/uploads/2019/10/Riji1.jpg?w=250&ssl=1'),
    new Team('Dr. Pradeep.S', 'Head – Retail Operating Unit' , 'He is the CEO' , 'https://i2.wp.com/ictkerala.org/wp-content/uploads/2019/10/pradeep.jpg?w=250&ssl=1'),
    new Team('Dr. Sreekanth.D', 'Senior Knowledge Officer' , 'He is the CEO' , 'https://i2.wp.com/ictkerala.org/wp-content/uploads/2020/08/sreekanth-1.png?fit=250%2C300&ssl=1'),
    new Team('Mr. Sreeraj.A', 'Senior  IT Infrastructure' , 'He is the CEO' , 'https://i1.wp.com/ictkerala.org/wp-content/uploads/2019/10/sreeraj1.jpg?fit=250%2C250&ssl=1'),


  ]
  constructor() { }

  
 getTeam() : Team[]{
  return this.teamMembers
}
}
