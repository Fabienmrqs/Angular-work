import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoAngularComponent } from './exo-angular.component';

describe('ExoAngularComponent', () => {
  let component: ExoAngularComponent;
  let fixture: ComponentFixture<ExoAngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExoAngularComponent]
    });
    fixture = TestBed.createComponent(ExoAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
