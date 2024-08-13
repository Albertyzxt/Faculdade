const prompt = require("prompt-sync")();

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
  const nome = prompt("Digite o nome do turno: ");
  const inicio = Number(prompt("Digite o inicio do turno: "));
  const fim = Number(prompt("Digite o fim do turno: "));

  if (
    nome != "" &&
    !isNaN(inicio) &&
    !isNaN(fim)
  ) {
    return {
      id,
      nome,
      inicio,
      fim,
    };
  }
  console.log("Dados inválidos!");
};

const show = (id) => {
    const el = db.find(el => el.id == id)

    return el
}

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

const turnoFunctions = {
  show,
  create,
  read,
  update,
  del
};
module.exports = turnoFunctions;