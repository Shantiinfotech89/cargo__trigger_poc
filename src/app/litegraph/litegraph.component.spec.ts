import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitegraphComponent } from './litegraph.component';

describe('LitegraphComponent', () => {
  let component: LitegraphComponent;
  let fixture: ComponentFixture<LitegraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitegraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LitegraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
