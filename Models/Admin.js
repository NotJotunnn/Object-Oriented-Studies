import { User } from "./User.js";
import { curso } from "./Curso.js";
import { horaAtual, listarPerfis } from "../Service/index.js";

export class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo = true) {
    super(nome, email, nascimento, ativo, role);
  }

  criarCurso(nome, docente, vagas, ativo) {
    if (!listarPerfis("docente").find(docenteAtivo => docenteAtivo == docente))
      return `\n[ERRO] [${horaAtual()}] Docente ${docente} não encontrado\n`;

    curso.criarCurso(nome, docente, vagas, ativo);
    return `Curso ${nome} com ${vagas} vagas criado com sucesso.`;
  }
}
