const prompt = require("prompt-sync")();

const curso = require("./models/curso.js");
const materia = require("./models/materia.js");
const sala = require("./models/sala.js");
const turno = require("./models/turno.js");
const aula = require("./models/aula.js");
const professor = require("./models/professor.js");
const aluno = require("./models/aluno.js");
const alunoAula = require("./models/aluno_aula.js");

console.log("GERENCIAMENTO DE UMA FACULDADE");

while (true) {
  console.log(`
O que deseja gerenciar?
1 - Turnos
2 - Cursos
3 - Materias
4 - Alunos
5 - Professores
6 - Salas
7 - Aulas
8 - Aulas de alunos
0 - Sair
        `);

  const opcaoEntidade = prompt();

  let continuar;
  switch (opcaoEntidade) {
    case "1":
      continuar = true;
      while (continuar) {
        console.log(`
GERENCIAMENTO DE TURNOS
    
1 - Criar
2 - Listar
3 - Atualizar
4 - Remover
5 - Voltar
        `);

        const opcaoServico = prompt();

        switch (opcaoServico) {
          case "1":
            turno.create();
            break;
          case "2":
            turno.read();
            break;
          case "3":
            turno.update();
            break;
          case "4":
            turno.del();
            break;
          case "5":
            continuar = false;
            break;
          default:
            console.log("Opcão inválida");
            break;
        }
      }
      break;
    case "2":
      continuar = true;
      while (continuar) {
        console.log(`
GERENCIAMENTO DE CURSOS
    
1 - Criar
2 - Listar
3 - Atualizar
4 - Remover
5 - Voltar
        `);

        const opcaoServico = prompt();

        switch (opcaoServico) {
          case "1":
            curso.create();
            break;
          case "2":
            curso.read();
            break;
          case "3":
            curso.update();
            break;
          case "4":
            curso.del();
            break;
          case "5":
            continuar = false;
            break;
          default:
            console.log("Opcão inválida");
            break;
        }
      }
      break;
    case "3":
      continuar = true;
      while (continuar) {
        console.log(`
 GERENCIAMENTO DE MATÉRIA
    
1 - Criar
2 - Listar
3 - Atualizar
4 - Remover
5 - Voltar
        `);

        const opcaoServico = prompt();

        switch (opcaoServico) {
          case "1":
            materia.create();
            break;
          case "2":
            materia.read();
            break;
          case "3":
            materia.update();
            break;
          case "4":
            materia.del();
            break;
          case "5":
            continuar = false;
            break;
          default:
            console.log("Opcão inválida");
            break;
        }
      }
      break;
    case "4":
      continuar = true;
      while (continuar) {
        console.log(`
GERENCIAMENTO DE ALUNOS
      
1 - Criar
2 - Listar
3 - Atualizar
4 - Remover
5 - Voltar
          `);

        const opcaoServico = prompt();

        switch (opcaoServico) {
          case "1":
            aluno.create();
            break;
          case "2":
            aluno.read();
            break;
          case "3":
            aluno.update();
            break;
          case "4":
            aluno.del();
            break;
          case "5":
            continuar = false;
            break;
          default:
            console.log("Opcão inválida");
            break;
        }
      }
      break;
    case "5":
      continuar = true;
      while (continuar) {
        console.log(`
 GERENCIAMENTO DE PROFESSORES
    
1 - Criar
2 - Listar
3 - Atualizar
4 - Remover
5 - Voltar
        `);

        const opcaoServico = prompt();

        switch (opcaoServico) {
          case "1":
            professor.create();
            break;
          case "2":
            professor.read();
            break;
          case "3":
            professor.update();
            break;
          case "4":
            professor.del();
            break;
          case "5":
            continuar = false;
            break;
          default:
            console.log("Opcão inválida");
            break;
        }
      }
      break;
    case "0":
      process.exit(0);
      break;
      case "6":
        continuar = true;
        while (continuar) {
          console.log(`
  GERENCIAMENTO DE SALAS
      
  1 - Criar
  2 - Listar
  3 - Atualizar
  4 - Remover
  5 - Voltar
          `);
  
          const opcaoServico = prompt();
  
          switch (opcaoServico) {
            case "1":
              sala.create();
              break;
            case "2":
              sala.read();
              break;
            case "3":
              sala.update();
              break;
            case "4":
              sala.del();
              break;
            case "5":
              continuar = false;
              break;
            default:
              console.log("Opcão inválida");
              break;
          }
        }
        break;
        case "7":
      continuar = true;
      while (continuar) {
        console.log(`
GERENCIAMENTO DE AULAS
    
1 - Criar
2 - Listar
3 - Atualizar
4 - Remover
5 - Voltar
        `);

        const opcaoServico = prompt();

        switch (opcaoServico) {
          case "1":
            aula.create();
            break;
          case "2":
            aula.read();
            break;
          case "3":
            aula.update();
            break;
          case "4":
            aula.del();
            break;
          case "5":
            continuar = false;
            break;
          default:
            console.log("Opcão inválida");
            break;
        }
      }
      break;
      case "8":
      continuar = true;
      while (continuar) {
        console.log(`
GERENCIAMENTO DE AULAS DOS ALUNOS
    
1 - Criar
2 - Listar
3 - Atualizar
4 - Remover
5 - Voltar
        `);

        const opcaoServico = prompt();

        switch (opcaoServico) {
          case "1":
            alunoAula.create();
            break;
          case "2":
            alunoAula.read();
            break;
          case "3":
            alunoAula.update();
            break;
          case "4":
            alunoAula.del();
            break;
          case "5":
            continuar = false;
            break;
          default:
            console.log("Opcão inválida");
            break;
        }
      }
      break;
    default:
      console.log("Opcão inválida");
      break;
  }
}
