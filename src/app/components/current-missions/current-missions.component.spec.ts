import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMissionsComponent } from './current-missions.component';

describe('CurrentMissionsComponent', () => {
  let component: CurrentMissionsComponent;
  let fixture: ComponentFixture<CurrentMissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentMissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentMissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
