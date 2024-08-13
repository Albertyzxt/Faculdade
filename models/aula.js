const prompt = require("prompt-sync")();

const professor = require("./professor.js");
const materia = require("./materia.js");
const sala = require("./sala.js");

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
  let id_sala = 0;

  if (sala.read()) {
    id_sala = parseInt(prompt("Digite o ID do sala: "));
  }  else {
    console.log("Nenhuma sala encontrada");
  }

  let id_materia = 0;

  if (materia.read()) {
    id_materia = parseInt(prompt("Digite o ID do materia: "));
  } else {
    console.log("Nenhuma matéria encontrada");
  }

  let id_professor = 0;

  if (professor.read()) {
    id_professor = parseInt(prompt("Digite o ID do professor: "));
  } else {
    console.log("Nenhum professor encontrado");
  }

  if (
    sala.show(id_sala) &&
    materia.show(id_materia) &&
    professor.show(id_professor)
  ) {
    return {
      id,
      id_sala,
      id_materia,
      id_professor
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

const aulaFunctions = {
  show,
  create,
  read,
  update,
  del,
};
module.exports = aulaFunctions;
