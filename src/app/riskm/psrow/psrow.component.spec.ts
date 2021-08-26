import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsrowComponent } from './psrow.component';

describe('PsrowComponent', () => {
  let component: PsrowComponent;
  let fixture: ComponentFixture<PsrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
