import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInfoComponent } from './view-info.component';

describe('ViewInfoComponent', () => {
  let component: ViewInfoComponent;
  let fixture: ComponentFixture<ViewInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
