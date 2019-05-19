import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExplorePage } from './user-explore.page';

describe('UserExplorePage', () => {
  let component: UserExplorePage;
  let fixture: ComponentFixture<UserExplorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserExplorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExplorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
