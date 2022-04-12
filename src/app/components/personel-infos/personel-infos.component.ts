import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../../services/profile.service";
import {Profile} from "../../models/Profile.model";

@Component({
  selector: 'app-personel-infos',
  templateUrl: './personel-infos.component.html',
  styleUrls: ['./personel-infos.component.css']
})
export class PersonelInfosComponent implements OnInit {
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
