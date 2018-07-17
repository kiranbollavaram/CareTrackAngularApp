import { Component, OnInit } from '@angular/core';
import { s } from '@angular/core/src/render3';

@Component({
  selector: 'app-machine-reports',
  templateUrl: './machine-reports.component.html',
  styleUrls: ['./machine-reports.component.css']
})
export class MachineReportsComponent implements OnInit {

  data: Object;
  constructor() {
    this.data = {
      chart: { },
      data: [
        {value: 500},
        {value: 600},
        {value: 700}
      ]
    };
   }

  ngOnInit() {
  }

}
