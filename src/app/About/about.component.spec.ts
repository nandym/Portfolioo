import { ComponentFixture, TestBed } from '@angular/core/testing';

import { aboutComponent } from './about.component';

describe('WebsiteComponent', () => {
  let component: aboutComponent;
  let fixture: ComponentFixture<aboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ aboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(aboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
