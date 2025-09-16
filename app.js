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

    tr.addEventListener("click", function () {
      displayArticleDetails(artikli[i]);
      document.querySelector("#articleDetails").style.border =
        "1px solid black";
    });
  }
}

function initializeArticels() {
  artikli = [
    new Artikal("Monitor", 165, "SAMSUNG S5 34 100Hz"),
    new Artikal("Tv", 650, "Samsung TV 65 4K"),
    new Artikal("Mis", 20, "Razer Mouse Viper 8KHz"),
  ];

  createArticleRows();
}

function displayArticleDetails(artikal) {
  let p = document.createElement("p");

  p.innerHTML =
    "Naziv: " +
    artikal.naziv +
    "<br>" +
    "Cena: " +
    artikal.cena +
    "$" +
    "<br>" +
    "Opis: " +
    artikal.opis;

  let detalji = document.querySelector("#articleDetails");
  if (detalji.firstChild) {
    detalji.firstChild.remove();
  }
  detalji.appendChild(p);
}

document.addEventListener("DOMContentLoaded", initializeArticels);
