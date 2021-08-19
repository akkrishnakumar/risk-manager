import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskmComponent } from './riskm.component';

describe('RiskmComponent', () => {
  let component: RiskmComponent;
  let fixture: ComponentFixture<RiskmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
