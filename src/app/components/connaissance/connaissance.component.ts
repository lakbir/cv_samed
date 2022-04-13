import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../../services/profile.service";
import {Article} from "../../models/Profile.model";

@Component({
  selector: 'app-connaissance',
  templateUrl: './connaissance.component.html',
  styleUrls: ['./connaissance.component.css']
})
export class ConnaissanceComponent implements OnInit {

  articles: Article[];
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(
        data => {
          this.articles = data.articles;
        }, error => {
          console.error(error);
        }
    )
  }

}
