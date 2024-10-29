import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClasesqrPage } from './clasesqr.page';

describe('ClasesqrPage', () => {
  let component: ClasesqrPage;
  let fixture: ComponentFixture<ClasesqrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasesqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
