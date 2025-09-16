class Artikal {
  constructor(naziv, cena, opis) {
    this.naziv = naziv;
    this.cena = cena;
    this.opis = opis;
  }
}

let artikli = [];

function createArticleRows() {
  let table = document.querySelector("#articles-body");

  for (let i = 0; i < artikli.length; i++) {
    let tr = document.createElement("tr");
    let br = document.createElement("td");
    let naziv = document.createElement("td");
    let cena = document.createElement("td");

    br.textContent = i + 1;
    naziv.textContent = artikli[i].naziv;
    cena.textContent = artikli[i].cena;

    tr.appendChild(br);
    tr.appendChild(naziv);
    tr.appendChild(cena);
    table.appendChild(tr);
  }
}

function initializeArticels() {
  artikli = [
    new Artikal("Monitor", 165, ""),
    new Artikal("Tv", 650, ""),
    new Artikal("Mis", 20, ""),
  ];

  createArticleRows();
}

document.addEventListener("DOMContentLoaded", initializeArticels);
