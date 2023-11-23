import { Injectable } from '@angular/core';
import { Mission } from './mission.model';

@Injectable({
  providedIn: 'root'
})
export class MissionsService {

  constructor() { }

  generateMission() {
    return new Mission(this.missionName, this.missionDuration, this.missionAwards);
  }

  get missionDuration() {
    return 50;
  }

  get missionName() {
    return "Super Mission"
  }

  get missionAwards() {
    return ["Donut", "Gold", "Exp"]
  }
}
