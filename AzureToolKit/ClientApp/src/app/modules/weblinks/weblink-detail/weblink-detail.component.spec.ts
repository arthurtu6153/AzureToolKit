import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeblinkDetailComponent } from './weblink-detail.component';

describe('WeblinkDetailComponent', () => {
  let component: WeblinkDetailComponent;
  let fixture: ComponentFixture<WeblinkDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeblinkDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeblinkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
