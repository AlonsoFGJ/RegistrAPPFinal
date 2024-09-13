import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListacursosAluPage } from './listacursos-alu.page';

describe('ListacursosAluPage', () => {
  let component: ListacursosAluPage;
  let fixture: ComponentFixture<ListacursosAluPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacursosAluPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
