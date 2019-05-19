import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMerchantPage } from './user-merchant.page';

describe('UserMerchantPage', () => {
  let component: UserMerchantPage;
  let fixture: ComponentFixture<UserMerchantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMerchantPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMerchantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
