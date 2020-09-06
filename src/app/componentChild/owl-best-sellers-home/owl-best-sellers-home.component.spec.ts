import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlBestSellersHomeComponent } from './owl-best-sellers-home.component';

describe('OwlBestSellersHomeComponent', () => {
  let component: OwlBestSellersHomeComponent;
  let fixture: ComponentFixture<OwlBestSellersHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwlBestSellersHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlBestSellersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
