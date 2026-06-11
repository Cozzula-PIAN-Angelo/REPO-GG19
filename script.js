const toggle = document.getElementById("toggle-tema");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark")
    ? "Tema chiaro"
    : "Tema scuro";
});

const prodotti = [
  { nome: "scarpe generiche", id: 1, prezzo: 40, categoria: "scarpe" },
  { nome: "t-shirt basic", id: 2, prezzo: 25, categoria: "abbigliamento" },
  { nome: "cintura in pelle", id: 3, prezzo: 15, categoria: "accessori" },
  { nome: "sneakers running", id: 4, prezzo: 75, categoria: "scarpe" },
  { nome: "giacca invernale", id: 5, prezzo: 120, categoria: "abbigliamento" },
  { nome: "orologio casual", id: 6, prezzo: 90, categoria: "accessori" },
];

const renderProdotti = (lista) => {
  document.getElementById("contenitore-prodotti").innerHTML = lista
    .map(
      (p) => `<article class="col-12 col-sm-6 col-xl-4 mb-3">
  <div class="card ${p.categoria} h-100 shadow-sm">
    <div class="card-body">
      <h5 class="card-title">${p.nome}</h5>
      <p class="card-text text-muted">${p.categoria}</p>
      <p class="fw-bold fs-5 m-0">${p.prezzo}$</p>
    </div>
    <div class="card-footer bg-white border-0">
      <button type="button" class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#prodotto-1" data-id="${p.id}">Dettagli</button>
    </div>
  </div>
</article>`,
    )
    .join("");
};
renderProdotti(prodotti);

const filtri = document.getElementById("filtri");

filtri.addEventListener("click", function (event) {
  const bottone = event.target.closest("[data-categoria]");
  if (!bottone) return;
  filtri.querySelectorAll(".btn").forEach((b) => b.classList.remove("active"));
  bottone.classList.add("active");
  const categoria = bottone.dataset.categoria;
  const filtrati =
    categoria === "tutti"
      ? prodotti
      : prodotti.filter((p) => p.categoria === categoria);
  renderProdotti(filtrati);
});

document
  .getElementById("prodotto-1")
  .addEventListener("show.bs.modal", (event) => {
    const id = Number(event.relatedTarget.dataset.id);
    const prodotto = prodotti.find((p) => p.id === id);
    document.getElementById("modale-titolo").textContent = prodotto.nome;
    document.getElementById("modale-prezzo").textContent =
      prodotto.prezzo + "$";
  });
