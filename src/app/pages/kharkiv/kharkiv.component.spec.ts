import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KharkivComponent } from './kharkiv.component';

describe('KharkivComponent', () => {
  let component: KharkivComponent;
  let fixture: ComponentFixture<KharkivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KharkivComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KharkivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
