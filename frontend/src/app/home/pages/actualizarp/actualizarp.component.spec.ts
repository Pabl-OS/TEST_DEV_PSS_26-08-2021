import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarpComponent } from './actualizarp.component';

describe('ActualizarpComponent', () => {
  let component: ActualizarpComponent;
  let fixture: ComponentFixture<ActualizarpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
