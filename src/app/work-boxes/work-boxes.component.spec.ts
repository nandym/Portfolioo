import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkBoxesComponent } from './work-boxes.component';

describe('WorkBoxesComponent', () => {
  let component: WorkBoxesComponent;
  let fixture: ComponentFixture<WorkBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkBoxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
