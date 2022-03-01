import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRegisterUpdateComponent } from './product-register-update.component';

describe('ProductRegisterUpdateComponent', () => {
  let component: ProductRegisterUpdateComponent;
  let fixture: ComponentFixture<ProductRegisterUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRegisterUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRegisterUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
