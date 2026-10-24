import { Component } from '@angular/core';
import { AlumnoList } from './components/alumno-list/alumno-list';

@Component({
  selector: 'app-root',
  imports: [AlumnoList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}