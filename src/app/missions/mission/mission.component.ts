import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionsService } from '../shared/missions.service';
import { Mission } from '../shared/mission.model';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.scss'
})
export class MissionComponent {
  public mission: Mission | undefined;
  public leftTime: string = "";
  private timer: any;

  constructor(private missionsService: MissionsService) {}

  ngOnInit() {
    this.mission = this.missionsService.generateMission();
  }

  public startTimer() {
    this.timer = setInterval(() => this.leftTime = this.displayLeftTime(), 1000)
  }

  public stopTimer() {
    clearInterval(this.timer);
  }

  private displayLeftTime() {
    if (this.mission) {
      let minutes = this.mission.duration / 60 > 1 ? Math.round(this.mission.duration / 60) : 0;
      let secondes = Math.round(this.mission.duration % 60);
      
      minutes = minutes;
      secondes = secondes;
      
      this.mission.duration <= 0 ? clearInterval(this.timer) : this.mission.duration = this.mission.duration - 1
      return `${minutes}:${secondes}`
    }
    return "";
  }


}

