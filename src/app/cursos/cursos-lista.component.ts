import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursosService } from './cursos.service';

@Component({
  templateUrl: './cursos-lista.component.html',
})
export class CursosListaComponet implements OnInit {
  _cursos: Curso[] = [];
  cursosFiltrados: Curso[] = [];
  _filtrarPor: string;

  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    this.returnoListaCursos();
  }

  returnoListaCursos(): void {
    this.cursosService.returnoListaCursos().subscribe((cursos) => {
      this._cursos = cursos;
      this.cursosFiltrados = this._cursos;
    });
  }

  removerPeloId(idCurso: number): void {
    this.cursosService.removerPeloId(idCurso).subscribe(
      (next) => {
        this.returnoListaCursos();
      },
      (erro) => {}
    );
  }

  set filtro(valeu: string) {
    this._filtrarPor = valeu;
    this.cursosFiltrados = this._cursos.filter(
      (curso: Curso) =>
        curso.nome
          .toLocaleLowerCase()
          .indexOf(this._filtrarPor.toLocaleLowerCase()) > -1
    );
  }

  get filtro() {
    return this._filtrarPor;
  }
}
