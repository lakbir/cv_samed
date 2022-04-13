import { Component, OnInit } from '@angular/core';
import {Profile} from "../../models/Profile.model";
import {ProfileService} from "../../services/profile.service";

@Component({
  selector: 'app-about-you',
  templateUrl: './about-you.component.html',
  styleUrls: ['./about-you.component.css']
})
export class AboutYouComponent implements OnInit {

  profile: Profile;
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(
        data => {
          this.profile = data;
        }, error => {
          console.error(error);
        }
    )
  }

}
