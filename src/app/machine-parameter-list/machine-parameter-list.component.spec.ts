import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineParameterListComponent } from './machine-parameter-list.component';

describe('MachineParameterListComponent', () => {
  let component: MachineParameterListComponent;
  let fixture: ComponentFixture<MachineParameterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineParameterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineParameterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
