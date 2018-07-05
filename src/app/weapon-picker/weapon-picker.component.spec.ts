import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponPickerComponent } from './weapon-picker.component';

describe('WeaponPickerComponent', () => {
  let component: WeaponPickerComponent;
  let fixture: ComponentFixture<WeaponPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
