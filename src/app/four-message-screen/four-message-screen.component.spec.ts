import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourMessageScreenComponent } from './four-message-screen.component';

describe('FourMessageScreenComponent', () => {
  let component: FourMessageScreenComponent;
  let fixture: ComponentFixture<FourMessageScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourMessageScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourMessageScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
