import { ComponentFixture, TestBed } from '@angular/core/testing';

import { unitympComponent } from './unitymp.component';

describe('WebsiteComponent', () => {
  let component: unitympComponent;
  let fixture: ComponentFixture<unitympComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ unitympComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(unitympComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
