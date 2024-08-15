import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProviderDetailsComponent } from './show-provider-details.component';

describe('ShowProviderDetailsComponent', () => {
  let component: ShowProviderDetailsComponent;
  let fixture: ComponentFixture<ShowProviderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProviderDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProviderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
