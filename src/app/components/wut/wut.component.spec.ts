import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WutComponent } from './wut.component';

describe('WutComponent', () => {
  let component: WutComponent;
  let fixture: ComponentFixture<WutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
