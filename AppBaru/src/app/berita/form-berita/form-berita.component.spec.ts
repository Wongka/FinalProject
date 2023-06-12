import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBeritaComponent } from './form-berita.component';

describe('FormBeritaComponent', () => {
  let component: FormBeritaComponent;
  let fixture: ComponentFixture<FormBeritaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBeritaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBeritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
