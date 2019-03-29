import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakePage } from './cake.page';

describe('CakePage', () => {
  let component: CakePage;
  let fixture: ComponentFixture<CakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
