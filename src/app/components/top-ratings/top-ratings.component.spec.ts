import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatingsComponent } from './top-ratings.component';

describe('TopRatingsComponent', () => {
  let component: TopRatingsComponent;
  let fixture: ComponentFixture<TopRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRatingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
