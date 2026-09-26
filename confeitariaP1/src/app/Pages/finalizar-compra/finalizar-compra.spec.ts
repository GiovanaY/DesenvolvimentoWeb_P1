import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinalizarCompra } from './finalizar-compra';

describe('FinalizarCompra', () => {
  let component: FinalizarCompra;
  let fixture: ComponentFixture<FinalizarCompra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalizarCompra],
    }).compileComponents();

    fixture = TestBed.createComponent(FinalizarCompra);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
