import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlSliderHomeComponent } from './owl-slider-home.component';

describe('OwlSliderHomeComponent', () => {
  let component: OwlSliderHomeComponent;
  let fixture: ComponentFixture<OwlSliderHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwlSliderHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlSliderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
