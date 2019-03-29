import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenoisePage } from './genoise.page';

describe('GenoisePage', () => {
  let component: GenoisePage;
  let fixture: ComponentFixture<GenoisePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenoisePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenoisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
