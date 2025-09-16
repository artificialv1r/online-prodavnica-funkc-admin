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
  table.innerHTML = "";

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
  artikli = JSON.parse(localStorage.getItem("artikli"));

  createArticleRows();
  handleFormSubmission();
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

function handleFormSubmission() {
  let submitBtn = document.querySelector("#submitBtn");
  submitBtn.addEventListener("click", function () {
    const forma = document.querySelector("#forma");
    const formData = new FormData(forma);

    const naziv = formData.get("naziv");
    const cena = formData.get("cena");
    const opis = formData.get("opis");

    if (!naziv || !cena || !opis) {
      alert("Sva polja moraju biti popunjena!");
      return;
    }

    const noviArtikal = new Artikal(naziv, cena, opis);
    artikli.push(noviArtikal);
    localStorage.setItem("artikli", JSON.stringify(artikli));

    createArticleRows();
  });
}
document.addEventListener("DOMContentLoaded", initializeArticels);
