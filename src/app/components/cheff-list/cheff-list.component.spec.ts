import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheffListComponent } from './cheff-list.component';

describe('CheffListComponent', () => {
  let component: CheffListComponent;
  let fixture: ComponentFixture<CheffListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheffListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheffListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
