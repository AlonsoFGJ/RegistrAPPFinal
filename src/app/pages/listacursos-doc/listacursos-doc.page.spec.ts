import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListacursosDocPage } from './listacursos-doc.page';

describe('ListacursosDocPage', () => {
  let component: ListacursosDocPage;
  let fixture: ComponentFixture<ListacursosDocPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacursosDocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
