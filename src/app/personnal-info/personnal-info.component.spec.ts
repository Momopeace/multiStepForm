import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnalInfoComponent } from './personnal-info.component';

describe('PersonnalInfoComponent', () => {
  let component: PersonnalInfoComponent;
  let fixture: ComponentFixture<PersonnalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnalInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonnalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
