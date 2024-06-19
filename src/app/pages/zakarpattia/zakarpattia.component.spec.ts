import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZakarpattiaComponent } from './zakarpattia.component';

describe('ZakarpattiaComponent', () => {
  let component: ZakarpattiaComponent;
  let fixture: ComponentFixture<ZakarpattiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZakarpattiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZakarpattiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
