import { ComponentFixture, TestBed } from '@angular/core/testing';
import { List2Page } from './list2.page';

describe('List2Page', () => {
  let component: List2Page;
  let fixture: ComponentFixture<List2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(List2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
