import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryMissionsComponent } from './history-missions.component';

describe('HistoryMissionsComponent', () => {
  let component: HistoryMissionsComponent;
  let fixture: ComponentFixture<HistoryMissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryMissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryMissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
