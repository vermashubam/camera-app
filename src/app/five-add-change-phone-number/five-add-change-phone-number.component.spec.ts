import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveAddChangePhoneNumberComponent } from './five-add-change-phone-number.component';

describe('FiveAddChangePhoneNumberComponent', () => {
  let component: FiveAddChangePhoneNumberComponent;
  let fixture: ComponentFixture<FiveAddChangePhoneNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveAddChangePhoneNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveAddChangePhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
