import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  editoras: Editora[];

  constructor() {
    this.editoras = [
      {
        codEditora: 1,
        nome: 'No Starch Press',
        autor: 'Marijn Haverbeke',
      },
      {
        codEditora: 2,
        nome: 'Alta Books',
        autor: 'Robert C. Martin',
      },
      {
        codEditora: 3,
        nome: 'Novatec',
        autor: 'Maurício Samy Silva',
      },
    ];
  }

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.filter((e) => e.codEditora === codEditora)[0];
    return editora ? editora.nome : '';
  }
}
