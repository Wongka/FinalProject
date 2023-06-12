import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBeritaComponent } from './detail-berita.component';

describe('DetailBeritaComponent', () => {
  let component: DetailBeritaComponent;
  let fixture: ComponentFixture<DetailBeritaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBeritaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBeritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
