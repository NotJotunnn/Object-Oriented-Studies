import { criarPerfil, listarPerfis } from "./Service/index.js"

const newUser = criarPerfil("Carlos", "carlos@teste.com", "21-02-2004", "estudante")

const newAdmin = criarPerfil("Juninho", "junipe@teste.com", "16-05-1995", "admin")

const newDocente = criarPerfil("Vieira", "vieira@teste.com", "03-12-2001", "docente")

// console.log(listarPerfis("docente"))

console.log(newAdmin.criarCurso("Javascript", newDocente.nome, 20))
console.log(newAdmin.criarCurso("Go", newDocente.nome, 20))
console.log(newAdmin.criarCurso("Java", newDocente.nome, 20))
// console.log(newAdmin.criarCurso("Javascript", "Julio Carlos", 20))

console.log(newUser.matricularCurso("Javascript"))

console.log(newUser.exibirCursosMatriculados())