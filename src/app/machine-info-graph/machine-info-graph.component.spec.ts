import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineInfoGraphComponent } from './machine-info-graph.component';

describe('MachineInfoGraphComponent', () => {
  let component: MachineInfoGraphComponent;
  let fixture: ComponentFixture<MachineInfoGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineInfoGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineInfoGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
