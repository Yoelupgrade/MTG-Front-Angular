import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalletsIdComponent } from './mallets-id.component';

describe('MalletsIdComponent', () => {
  let component: MalletsIdComponent;
  let fixture: ComponentFixture<MalletsIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MalletsIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MalletsIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
