import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { Team } from '../../models/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  
  teamMembersList: Team[] = []

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamMembersList = this.teamService.getTeam()
    

  }

}
