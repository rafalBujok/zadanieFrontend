import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputKeywordsComponent } from './input-keywords.component';

describe('InputKeywordsComponent', () => {
  let component: InputKeywordsComponent;
  let fixture: ComponentFixture<InputKeywordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputKeywordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputKeywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
