import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStreamingComponent } from './view-streaming.component';

describe('ViewStreamingComponent', () => {
  let component: ViewStreamingComponent;
  let fixture: ComponentFixture<ViewStreamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStreamingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStreamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
