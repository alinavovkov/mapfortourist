import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhersonComponent } from './kherson.component';

describe('KhersonComponent', () => {
  let component: KhersonComponent;
  let fixture: ComponentFixture<KhersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KhersonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KhersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
