import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenAddChangeCameraComponent } from './seven-add-change-camera.component';

describe('SevenAddChangeCameraComponent', () => {
  let component: SevenAddChangeCameraComponent;
  let fixture: ComponentFixture<SevenAddChangeCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SevenAddChangeCameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenAddChangeCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
