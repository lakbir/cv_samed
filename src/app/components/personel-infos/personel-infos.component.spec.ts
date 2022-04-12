import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelInfosComponent } from './personel-infos.component';

describe('PersonelInfosComponent', () => {
  let component: PersonelInfosComponent;
  let fixture: ComponentFixture<PersonelInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonelInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonelInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
