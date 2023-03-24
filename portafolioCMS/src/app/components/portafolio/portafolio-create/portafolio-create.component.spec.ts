import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioCreateComponent } from './portafolio-create.component';

describe('PortafolioCreateComponent', () => {
  let component: PortafolioCreateComponent;
  let fixture: ComponentFixture<PortafolioCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortafolioCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortafolioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
