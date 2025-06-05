import { User, users } from "../Models/User.js";
import { Admin } from "../Models/Admin.js";
import { curso } from "../Models/Curso.js";
import { Docente } from "../Models/Docente.js";

export function horaAtual(hora) {
  if (hora) {
    return `${hora.getHours().toString().padStart(2, "0")}:${hora
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${hora.getSeconds().toString().padStart(2, "0")}`;
  }
  return `${new Date(Date.now())
    .getHours()
    .toString()
    .padStart(2, "0")}:${new Date(Date.now())
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${new Date(Date.now())
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;
}

export function criarPerfil(nome, email, nascimento, type) {
  let user;

  if (type == "docente") user = new Docente(nome, email, nascimento);
  else if (type == "admin") user = new Admin(nome, email, nascimento);
  else user = new User(nome, email, nascimento);

  users.push(user);

  return user;
}

export function listarPerfis(type) {
  type = type ? type : "estudante";

  return users
    .filter((user) => user.ativo == true && user.role == type)
    .map((user) => user.nome);
}

export function listarCursosPorDocente(docente) {
  curso.filter((curso) => curso.docente == docente).map((curso) => curso.nome);
}
