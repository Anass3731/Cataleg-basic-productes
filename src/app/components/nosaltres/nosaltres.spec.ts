import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nosaltres } from './nosaltres';

describe('Nosaltres', () => {
  let component: Nosaltres;
  let fixture: ComponentFixture<Nosaltres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nosaltres],
    }).compileComponents();

    fixture = TestBed.createComponent(Nosaltres);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
