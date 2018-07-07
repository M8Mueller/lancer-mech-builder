import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechBuilderComponent } from './mech-builder.component';

describe('MechBuilderComponent', () => {
  let component: MechBuilderComponent;
  let fixture: ComponentFixture<MechBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
