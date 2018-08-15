import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeoheaderComponent } from './deoheader.component';

describe('DeoheaderComponent', () => {
  let component: DeoheaderComponent;
  let fixture: ComponentFixture<DeoheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeoheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeoheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
