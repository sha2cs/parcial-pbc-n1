import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancionFavorita } from './cancion-favorita';

describe('CancionFavorita', () => {
  let component: CancionFavorita;
  let fixture: ComponentFixture<CancionFavorita>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancionFavorita],
    }).compileComponents();

    fixture = TestBed.createComponent(CancionFavorita);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
