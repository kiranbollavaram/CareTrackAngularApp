import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.css']
})
export class SelectOptionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ShowMachineInformation(): void {
    this.router.navigate(['/machine-list']);
  }

  ShowReportParameters(): void {
    this.router.navigate(['/machine-parameter-list']);
  }


}
