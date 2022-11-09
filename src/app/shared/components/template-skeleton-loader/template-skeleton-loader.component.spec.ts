import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSkeletonLoaderComponent } from './template-skeleton-loader.component';

describe('TemplateSkeletonLoaderComponent', () => {
  let component: TemplateSkeletonLoaderComponent;
  let fixture: ComponentFixture<TemplateSkeletonLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateSkeletonLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSkeletonLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
