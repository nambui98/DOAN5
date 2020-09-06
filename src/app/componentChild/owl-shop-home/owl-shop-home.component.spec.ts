import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlShopHomeComponent } from './owl-shop-home.component';

describe('OwlShopHomeComponent', () => {
  let component: OwlShopHomeComponent;
  let fixture: ComponentFixture<OwlShopHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwlShopHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlShopHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
