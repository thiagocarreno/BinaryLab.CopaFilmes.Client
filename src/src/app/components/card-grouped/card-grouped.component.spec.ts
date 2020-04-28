import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGroupedComponent } from './card-grouped.component';

describe('CardGroupedComponent', () => {
  let component: CardGroupedComponent;
  let fixture: ComponentFixture<CardGroupedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGroupedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGroupedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
