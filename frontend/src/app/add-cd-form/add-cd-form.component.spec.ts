import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCdFormComponent } from './add-cd-form.component';

describe('AddFormComponent', () => {
  let component: AddCdFormComponent;
  let fixture: ComponentFixture<AddCdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCdFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
