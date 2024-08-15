import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProviderImagesDialogComponent } from './show-provider-images-dialog.component';

describe('ShowProviderImagesDialogComponent', () => {
  let component: ShowProviderImagesDialogComponent;
  let fixture: ComponentFixture<ShowProviderImagesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProviderImagesDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProviderImagesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
