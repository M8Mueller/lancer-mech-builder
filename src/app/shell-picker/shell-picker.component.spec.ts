import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellPickerComponent } from './shell-picker.component';

describe('ShellPickerComponent', () => {
  let component: ShellPickerComponent;
  let fixture: ComponentFixture<ShellPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShellPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
