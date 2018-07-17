import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-machine-parameter-list',
  templateUrl: './machine-parameter-list.component.html',
  styleUrls: ['./machine-parameter-list.component.css']
})
export class MachineParameterListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  ShowReportParameters(): void {
    this.router.navigate(['/total-machine-graphs']);
  }
}
