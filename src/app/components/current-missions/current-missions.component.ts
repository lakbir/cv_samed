import { Component, OnInit } from '@angular/core';
import {Profile} from "../../models/Profile.model";
import {ProfileService} from "../../services/profile.service";

@Component({
  selector: 'app-current-missions',
  templateUrl: './current-missions.component.html',
  styleUrls: ['./current-missions.component.css']
})
export class CurrentMissionsComponent implements OnInit {

  currentmissions: string[];
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(
        data => {
          this.currentmissions = data.current_missions;
        }, error => {
          console.error(error);
        }
    )
  }

}
