import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EstrelaModule } from '../shared/component/estrela/estrela.module';
import { AppPipeModule } from '../shared/pipe/app-pipe.module';
import { CursoDetalhesComponent } from './curso-detalhes.component';
import { CursosListaComponet } from './cursos-lista.component';

@NgModule({
  declarations: [CursoDetalhesComponent, CursosListaComponet],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppPipeModule,
    EstrelaModule,
    RouterModule.forChild([
      {
        path: 'cursos',
        component: CursosListaComponet,
      },
      {
        path: 'curso/detalhes/:id',
        component: CursoDetalhesComponent,
      },
    ]),
  ],
})
export class CursoModule {}
