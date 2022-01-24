import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsIdComponent } from './cards-id.component';

describe('CardsIdComponent', () => {
  let component: CardsIdComponent;
  let fixture: ComponentFixture<CardsIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
