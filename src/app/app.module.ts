import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './erro-404/erro-404.componet';
import { CursoModule } from './cursos/curso.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/component/core.module';

@NgModule({
  declarations: [AppComponent, Error404Component],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    CursoModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'cursos', pathMatch: 'full' },
      {
        path: '**',
        component: Error404Component,
      },
    ]),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
