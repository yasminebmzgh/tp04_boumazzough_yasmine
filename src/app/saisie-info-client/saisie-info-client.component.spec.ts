import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieInfoClientComponent } from './saisie-info-client.component';

describe('SaisieInfoClientComponent', () => {
  let component: SaisieInfoClientComponent;
  let fixture: ComponentFixture<SaisieInfoClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisieInfoClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieInfoClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
