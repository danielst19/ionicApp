import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForPage } from './ng-for.page';

describe('NgForPage', () => {
  let component: NgForPage;
  let fixture: ComponentFixture<NgForPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NgForPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
