import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Profile} from "../models/Profile.model";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private host = environment.host;
  constructor(private http: HttpClient) { }

  getProfile(){
    return this.http.get<Profile>(`${this.host}/profile`);
  }
}
