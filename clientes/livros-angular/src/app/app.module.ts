import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component';

import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, LivroListaComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ControleEditoraService, ControleLivrosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
