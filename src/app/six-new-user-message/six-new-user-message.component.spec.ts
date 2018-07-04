import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixNewUserMessageComponent } from './six-new-user-message.component';

describe('SixNewUserMessageComponent', () => {
  let component: SixNewUserMessageComponent;
  let fixture: ComponentFixture<SixNewUserMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixNewUserMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixNewUserMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
