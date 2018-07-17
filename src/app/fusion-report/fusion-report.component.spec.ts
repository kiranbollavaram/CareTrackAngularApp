import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FusionReportComponent } from './fusion-report.component';

describe('FusionReportComponent', () => {
  let component: FusionReportComponent;
  let fixture: ComponentFixture<FusionReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FusionReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FusionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
