import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdGridComponent } from './cd-grid.component';

describe('GridComponent', () => {
  let component: CdGridComponent;
  let fixture: ComponentFixture<CdGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
