import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvanoFrankivskComponent } from './ivano-frankivsk.component';

describe('IvanoFrankivskComponent', () => {
  let component: IvanoFrankivskComponent;
  let fixture: ComponentFixture<IvanoFrankivskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IvanoFrankivskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IvanoFrankivskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
