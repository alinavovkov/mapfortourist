import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhmelnytskyiComponent } from './khmelnytskyi.component';

describe('KhmelnytskyiComponent', () => {
  let component: KhmelnytskyiComponent;
  let fixture: ComponentFixture<KhmelnytskyiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KhmelnytskyiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KhmelnytskyiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
