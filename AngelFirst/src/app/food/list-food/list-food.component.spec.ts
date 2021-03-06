import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFoodComponent } from './list-food.component';

describe('ListFoodComponent', () => {
  let component: ListFoodComponent;
  let fixture: ComponentFixture<ListFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
