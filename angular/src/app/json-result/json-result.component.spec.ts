import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonResultComponent } from './json-result.component';

describe('JsonResultComponent', () => {
  let component: JsonResultComponent;
  let fixture: ComponentFixture<JsonResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
