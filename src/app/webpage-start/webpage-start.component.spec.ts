import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebpageStartComponent } from './webpage-start.component';

describe('WebpageStartComponent', () => {
  let component: WebpageStartComponent;
  let fixture: ComponentFixture<WebpageStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebpageStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebpageStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
