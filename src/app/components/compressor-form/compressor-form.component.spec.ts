import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompressorFormComponent } from './compressor-form.component';

describe('CompressorFormComponent', () => {
  let component: CompressorFormComponent;
  let fixture: ComponentFixture<CompressorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompressorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompressorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
