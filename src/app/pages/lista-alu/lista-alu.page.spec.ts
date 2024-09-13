import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaAluPage } from './lista-alu.page';

describe('ListaAluPage', () => {
  let component: ListaAluPage;
  let fixture: ComponentFixture<ListaAluPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAluPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
