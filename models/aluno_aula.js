const prompt = require("prompt-sync")();

const aula = require("./aula.js");
const aluno = require("./aluno.js");

const db = [];

let ultimoId = 0;

function getIndex(id) {
  let indice = db.findIndex((el) => el.id == id);

  if (indice != -1) {
    return indice;
  } else {
    console.log("ID inexistente");
  }
}

const model = (id = ++ultimoId) => {
  let id_aula = 0;

  if (aula.read()) {
    id_aula = parseInt(prompt("Digite o ID da Aula: "));
  }

  let id_aluno = 0;

  if (aluno.read()) {
    id_aluno = parseInt(prompt("Digite o ID do Aluno: "));
  }

  if (
    aula.show(id_aula) &&
    aluno.show(id_aluno)
  ) {
    return {
      id,
      id_aula,
      id_aluno,
    };
  }
  console.log("Dados inválidos!");
};

const show = (id) => {
  const el = db.find((el) => el.id == id);

  return el;
};

const create = () => {
  const novo = model();

  if (novo) {
    db.push(novo);
    console.log("Registro criado com sucesso!");
  }
};

const read = () => {
  if (db.length == 0) {
    console.log("Nenhum registro encontrado!");
    return false;
  }

  db.forEach((el) => console.log(el));
  return true;
};

const update = () => {
  if (read()) {
    const id = parseInt(prompt("Digite o ID que deseja atualizar:"));

    const indice = getIndex(id);

    if (indice > -1) {
      const novo = model(id);

      if (novo) {
        db[indice] = novo;
        console.log("Atualizado com sucesso!");
      }
    }
  }
};

const del = () => {
  if (read()) {
    const id = parseInt(prompt("Digite o ID que deseja remover: "));

    const indice = getIndex(id);

    if (indice > -1) {
      db.splice(indice, 1);
      console.log("Removido com sucesso!");
    }
  }
};

const alunoAulaFunctions = {
  show,
  create,
  read,
  update,
  del,
};
module.exports = alunoAulaFunctions;
