import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksAllComponent } from './books-all.component';

describe('BooksAllComponent', () => {
  let component: BooksAllComponent;
  let fixture: ComponentFixture<BooksAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
