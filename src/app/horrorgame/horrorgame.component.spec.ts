import { ComponentFixture, TestBed } from '@angular/core/testing';

import { horrorgameComponent } from './horrorgame.component';

describe('WebsiteComponent', () => {
  let component: horrorgameComponent;
  let fixture: ComponentFixture<horrorgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ horrorgameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(horrorgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
