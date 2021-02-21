import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteEditConfirmComponent } from './note-edit-confirm.component';

describe('NoteEditConfirmComponent', () => {
  let component: NoteEditConfirmComponent;
  let fixture: ComponentFixture<NoteEditConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteEditConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteEditConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
