import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machine-info-graph',
  templateUrl: './machine-info-graph.component.html',
  styleUrls: ['./machine-info-graph.component.css']
})
export class MachineInfoGraphComponent implements OnInit {

  constructor() { }

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    height: 560
  };
  public barChartLabels: string[] = ['Production', 'Machine Hours', 'Productivity', 'Fuel Consumed', 'Ideal Time', 'Distance', 'Cycle No'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: '2017'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: '2018'}
  ];

  ngOnInit() {
  }

}
