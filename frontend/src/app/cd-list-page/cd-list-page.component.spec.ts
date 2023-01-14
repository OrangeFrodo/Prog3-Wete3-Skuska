import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdListPageComponent } from './cd-list-page.component';

describe('CdListPageComponent', () => {
  let component: CdListPageComponent;
  let fixture: ComponentFixture<CdListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
