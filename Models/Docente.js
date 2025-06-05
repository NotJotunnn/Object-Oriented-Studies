import { User } from "./User.js";
import { curso } from "./Curso.js"

export class Docente extends User {
  constructor(nome, email, nascimento, role = "docente", ativo = true) {
    super(nome, email, nascimento, ativo, role);
  }
  aprovarEstudante(nome, nomeCurso) {
    if(!curso.cursos.find(curso => curso.docente == this.nome && curso.nome == nomeCurso)) return `Curso ${nomeCurso} não encontrado.`
    return `Estudante ${nome} aprovado com sucesso no curso ${nomeCurso}, responsável ${this.nome}.`;
  }
  reprovarEstudante(nome, curso) {
    return `Estudante ${nome} reprovado com sucesso no curso ${curso}, responsável ${this.nome}.`;
  }
}