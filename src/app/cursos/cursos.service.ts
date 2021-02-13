import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  private cursoUrl: string = 'http://localhost:3100/api/cursos';
  constructor(private httpClient: HttpClient) {}

  returnoListaCursos(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(this.cursoUrl);
  }

  retornarPeloId(id: number): Observable<Curso> {
    return this.httpClient.get<Curso>(this.cursoUrl + '/' + id);
  }

  removerPeloId(id: number): Observable<any> {
    return this.httpClient.delete<Curso>(this.cursoUrl + '/' + id);
  }

  gravar(curso: Curso): Observable<Curso> {
    if (curso.id) {
      return this.httpClient.put<Curso>(this.cursoUrl + '/' + curso.id, curso);
    } else {
      return this.httpClient.post<Curso>(this.cursoUrl, curso);
    }
  }
}

var CURSOS: Curso[] = [
  {
    id: 1,
    nome: 'Angular: CLI',
    descricao:
      'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
    duracao: 120,
    codigo: 'XLF-1212',
    rating: 3,
    preco: 12.99,
    imagemUrl: '/assets/images/cli.png',
  },
  {
    id: 2,
    nome: 'Angular: Forms',
    descricao:
      'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
    duracao: 80,
    codigo: 'DWQ-3412',
    rating: 3.5,
    preco: 24.99,
    imagemUrl: '/assets/images/forms.png',
  },
  {
    id: 3,
    nome: 'Angular: HTTP',
    descricao:
      'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
    duracao: 80,
    codigo: 'QPL-0913',
    rating: 4.0,
    preco: 36.99,
    imagemUrl: '/assets/images/http.png',
  },
  {
    id: 4,
    nome: 'Angular: Router',
    descricao:
      'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
    duracao: 80,
    codigo: 'OHP-1095',
    rating: 4.5,
    preco: 46.99,
    imagemUrl: '/assets/images/router.png',
  },
  {
    id: 5,
    nome: 'Angular: Animations',
    descricao:
      'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
    duracao: 80,
    codigo: 'PWY-9381',
    rating: 5,
    preco: 56.99,
    imagemUrl: '/assets/images/animations.png',
  },
];
