import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeatEaterMenuComponent } from './meat-eater-menu.component';

describe('MeatEaterMenuComponent', () => {
  let component: MeatEaterMenuComponent;
  let fixture: ComponentFixture<MeatEaterMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeatEaterMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeatEaterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
