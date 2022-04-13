import { Component, OnInit } from '@angular/core';
import {Mission} from "../../models/Profile.model";
import {ProfileService} from "../../services/profile.service";

@Component({
  selector: 'app-history-missions',
  templateUrl: './history-missions.component.html',
  styleUrls: ['./history-missions.component.css']
})
export class HistoryMissionsComponent implements OnInit {
  displayedColumns: string[] = ['projet', 'client', 'date', 'description'];
  dataSource: Mission[];
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(
        data => {
          this.dataSource = data.history_missions;
        }, error => {
          console.error(error);
        }
    )
  }

}
