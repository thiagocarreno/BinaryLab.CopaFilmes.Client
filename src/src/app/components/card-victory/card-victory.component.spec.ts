import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVictoryComponent } from './card-victory.component';

describe('CardVictoryComponent', () => {
  let component: CardVictoryComponent;
  let fixture: ComponentFixture<CardVictoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardVictoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVictoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
