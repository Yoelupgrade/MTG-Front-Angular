import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalletsComponent } from './mallets.component';

describe('MalletsComponent', () => {
  let component: MalletsComponent;
  let fixture: ComponentFixture<MalletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MalletsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
