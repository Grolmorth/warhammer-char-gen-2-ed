import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodawanieComponent } from './dodawanie.component';

describe('DodawanieComponent', () => {
  let component: DodawanieComponent;
  let fixture: ComponentFixture<DodawanieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodawanieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodawanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
