import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlCarouselDemoComponent } from './owl-carousel-demo.component';

describe('OwlCarouselDemoComponent', () => {
  let component: OwlCarouselDemoComponent;
  let fixture: ComponentFixture<OwlCarouselDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwlCarouselDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlCarouselDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
