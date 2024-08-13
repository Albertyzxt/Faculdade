const prompt = require("prompt-sync")();

const turno = require("./turno.js");

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
  const nome = prompt("Digite o nome do curso: ");
  const horas = parseInt(prompt("Digite a quantidade de horas do curso: "));

  let id_turno = 0;

  if (turno.read()) {
    id_turno = parseInt(prompt("Digite o ID do turno: "));
  } else {
    console.log("Nenhum turno encontrado")
  }

  if (nome != "" && !isNaN(horas) && turno.show(id_turno)) {
    return {
      id,
      nome,
      horas,
      id_turno,
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

const cursoFunctions = {
  show,
  create,
  read,
  update,
  del,
};
module.exports = cursoFunctions;
