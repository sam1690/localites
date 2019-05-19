import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNewsPage } from './user-news.page';

describe('UserNewsPage', () => {
  let component: UserNewsPage;
  let fixture: ComponentFixture<UserNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
