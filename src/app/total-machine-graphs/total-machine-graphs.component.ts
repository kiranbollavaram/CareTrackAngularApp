import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-machine-graphs',
  templateUrl: './total-machine-graphs.component.html',
  styleUrls: ['./total-machine-graphs.component.css']
})
export class TotalMachineGraphsComponent implements OnInit {

  constructor() { }

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['Machine1', 'Machine2', 'Machine3', 'Machine4', 'Machine5', 'Machine6', 'Machine7'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Machine Hours'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Productivity (Tons/Hour)'}
  ];

  ngOnInit() {
  }

}
