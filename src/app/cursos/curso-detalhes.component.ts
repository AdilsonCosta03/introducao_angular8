import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from './curso';
import { CursosService } from './cursos.service';

@Component({
  templateUrl: './curso-detalhes.component.html',
})
export class CursoDetalhesComponent implements OnInit {
  curso: Curso;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cursoService: CursosService
  ) {}

  ngOnInit(): void {
    this.retornarPeloId(+this.activatedRoute.snapshot.paramMap.get('id'));
  }

  retornarPeloId(id: number): void {
    this.cursoService.retornarPeloId(id).subscribe((curso) => {
      this.curso = curso;
    });
  }

  gravar(): void {
    this.cursoService.gravar(this.curso).subscribe((curso) => {
      console.log('Curso gravado com sucesso', curso);
    });
  }
}
