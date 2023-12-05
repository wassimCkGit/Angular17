import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainManuComponent } from './main-manu.component';

describe('MainManuComponent', () => {
  let component: MainManuComponent;
  let fixture: ComponentFixture<MainManuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainManuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainManuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
