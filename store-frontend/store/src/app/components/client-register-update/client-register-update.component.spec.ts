import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientRegisterUpdateComponent } from './client-register-update.component';

describe('ClientRegisterUpdateComponent', () => {
  let component: ClientRegisterUpdateComponent;
  let fixture: ComponentFixture<ClientRegisterUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientRegisterUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientRegisterUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
