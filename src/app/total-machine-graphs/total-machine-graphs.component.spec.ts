import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalMachineGraphsComponent } from './total-machine-graphs.component';

describe('TotalMachineGraphsComponent', () => {
  let component: TotalMachineGraphsComponent;
  let fixture: ComponentFixture<TotalMachineGraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalMachineGraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalMachineGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
