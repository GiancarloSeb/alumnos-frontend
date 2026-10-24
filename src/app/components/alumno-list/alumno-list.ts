import { Component, OnInit, inject, signal } from '@angular/core';
import { Alumno } from '../../models/alumno';
import { AlumnoService } from '../../services/alumno';

@Component({
  selector: 'app-alumno-list',
  imports: [],
  templateUrl: './alumno-list.html',
  styleUrl: './alumno-list.scss'
})
export class AlumnoList implements OnInit {
  private alumnoService = inject(AlumnoService);

  alumnos = signal<Alumno[]>([]);
  error = signal<string>('');

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.alumnoService.listar().subscribe({
      next: (data) => {
        this.alumnos.set(data);
        this.error.set('');
      },
      error: () => this.error.set('No se pudo conectar con el servidor. Verifique que el backend esté en ejecución.')
    });
  }

  eliminar(alumno: Alumno): void {
    if (!confirm(`¿Eliminar a ${alumno.nombres}?`)) return;

    this.alumnoService.eliminar(alumno.id).subscribe({
      next: () => this.alumnos.update(lista => lista.filter(a => a.id !== alumno.id)),
      error: () => this.error.set('No se pudo eliminar el alumno.')
    });
  }
}