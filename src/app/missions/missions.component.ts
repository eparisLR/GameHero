import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionsService } from './shared/missions.service';
import { MissionComponent } from './mission/mission.component';

@Component({
  selector: 'app-missions',
  standalone: true,
  imports: [CommonModule, MissionComponent],
  providers: [MissionsService],
  templateUrl: './missions.component.html',
  styleUrl: './missions.component.scss'
})
export class MissionsComponent {

}
