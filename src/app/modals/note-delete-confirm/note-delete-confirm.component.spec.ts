import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDeleteConfirmComponent } from './note-delete-confirm.component';

describe('NoteDeleteConfirmComponent', () => {
  let component: NoteDeleteConfirmComponent;
  let fixture: ComponentFixture<NoteDeleteConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteDeleteConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteDeleteConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
