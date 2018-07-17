import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { FusionChartsModule } from 'angular2-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionMaps from 'fusioncharts/fusioncharts.maps';
import * as WorldMap from 'fusioncharts/maps/fusioncharts.world';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from './app.component';
import {MachineListComponent} from './machine-list/machine-list.component';
import {MachineService} from './machine.service';
import { MachineReportsComponent } from './machine-reports/machine-reports.component';
import { FusionReportComponent } from './fusion-report/fusion-report.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { SelectOptionComponent } from './select-option/select-option.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MachineInformationComponent } from './machine-information/machine-information.component';
import { MachineInfoGraphComponent } from './machine-info-graph/machine-info-graph.component';
import { MachineParameterListComponent } from './machine-parameter-list/machine-parameter-list.component';
import { TotalMachineGraphsComponent } from './total-machine-graphs/total-machine-graphs.component';

const appRoutes: Routes = [
  {path: 'machine-list', component: MachineListComponent},
  {path: 'fusion-report', component: FusionReportComponent},
  {path: 'customer-login', component: CustomerLoginComponent},
  {path: 'select-option', component: SelectOptionComponent},
  {path: 'machine-information', component: MachineInformationComponent},
  {path: 'machine-info-graph', component: MachineInfoGraphComponent},
  {path: 'machine-parameter-list', component: MachineParameterListComponent},
  {path: 'total-machine-graphs', component: TotalMachineGraphsComponent},
  {path: '', redirectTo: '/customer-login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    MachineListComponent,
    MachineReportsComponent,
    FusionReportComponent,
    CustomerLoginComponent,
    SelectOptionComponent,
    MachineInformationComponent,
    MachineInfoGraphComponent,
    MachineParameterListComponent,
    TotalMachineGraphsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FusionChartsModule.forRoot(FusionCharts, Charts),
    GridModule,
    BrowserAnimationsModule,
    ChartsModule
  ],
  providers: [MachineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
