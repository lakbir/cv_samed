import { Component, OnInit } from '@angular/core';
import {Profile} from "../../models/Profile.model";
import {ProfileService} from "../../services/profile.service";

@Component({
  selector: 'app-solde-conge',
  templateUrl: './solde-conge.component.html',
  styleUrls: ['./solde-conge.component.css']
})
export class SoldeCongeComponent implements OnInit {

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
