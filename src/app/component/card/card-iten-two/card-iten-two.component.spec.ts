import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItenTwoComponent } from './card-iten-two.component';

describe('CardItenTwoComponent', () => {
  let component: CardItenTwoComponent;
  let fixture: ComponentFixture<CardItenTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardItenTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardItenTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
