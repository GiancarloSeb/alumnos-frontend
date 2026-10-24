import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnoList } from './alumno-list';

describe('AlumnoList', () => {
  let component: AlumnoList;
  let fixture: ComponentFixture<AlumnoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnoList],
    }).compileComponents();

    fixture = TestBed.createComponent(AlumnoList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
