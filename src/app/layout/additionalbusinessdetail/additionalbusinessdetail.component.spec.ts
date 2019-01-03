import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalbusinessdetailComponent } from './additionalbusinessdetail.component';

describe('AdditionalbusinessdetailComponent', () => {
  let component: AdditionalbusinessdetailComponent;
  let fixture: ComponentFixture<AdditionalbusinessdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalbusinessdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalbusinessdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
