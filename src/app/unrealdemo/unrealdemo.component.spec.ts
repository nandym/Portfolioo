import { ComponentFixture, TestBed } from '@angular/core/testing';

import { unrealdemoComponent } from './unrealdemo.component';

describe('WebsiteComponent', () => {
  let component: unrealdemoComponent;
  let fixture: ComponentFixture<unrealdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ unrealdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(unrealdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
