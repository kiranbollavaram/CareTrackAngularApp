import { Component, OnInit } from '@angular/core';
import { MachineService } from '../machine.service';
import { MachineFeatures } from '../machine-features';
import { Router } from '@angular/router';

@Component({
  selector: 'app-machine-information',
  templateUrl: './machine-information.component.html',
  styleUrls: ['./machine-information.component.css']
})
export class MachineInformationComponent implements OnInit {

  machine: MachineFeatures[];
  constructor(private machineService: MachineService, private router: Router) { }

  ngOnInit() {
    this.machineService.getMachineInformation()
    .subscribe((machineData) => this.machine = machineData);
  }

  DisplayGraph(): void {
    this.router.navigate(['/machine-info-graph']);
  }

}



