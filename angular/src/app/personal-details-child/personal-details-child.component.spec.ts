import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsChildComponent } from './personal-details-child.component';

describe('PersonalDetailsChildComponent', () => {
  let component: PersonalDetailsChildComponent;
  let fixture: ComponentFixture<PersonalDetailsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDetailsChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDetailsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
