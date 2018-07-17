import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MachineService} from '../machine.service';
import { MachineFeatures } from '../machine-features';

import { State } from '@progress/kendo-data-query';

import {
GridDataResult,
DataStateChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.css']
})
export class MachineListComponent implements OnInit {

  machine: MachineFeatures[];

  constructor(private machineService: MachineService, private router: Router) { }

  ngOnInit() {
    this.machineService.getMachinelist()
        .subscribe((machineData) => this.machine = machineData);
  }

  ShowMachineDetails() {
    this.router.navigate(['/machine-information']);
  }

}
