import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-fusion-report',
  templateUrl: './fusion-report.component.html',
  styleUrls: ['./fusion-report.component.css']
})
export class FusionReportComponent implements OnInit {

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
