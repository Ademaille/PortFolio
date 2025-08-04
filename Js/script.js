const Animé = [
    { name: "Freezer", image: "Dessins/Animés/Freezer.JPG", caption: "Freezer de DBZ" },
    { name: "Cooler", image: "Dessins/Animés/Cooler.JPG", caption: "Cooler de DBZ" },
    { name: "Vados", image: "Dessins/Animés/Vados.JPG", caption: "Vados de DBS" }
];

const Jeux = [
    { name: "Vaylin", image: "Dessins/Jeux/Vaylin.JPG", caption: "Vaylin de SWOR" },
    { name: "Yomi", image: "Dessins/Jeux/Yomi.JPG", caption: "Yomi de FF13-2" },
    { name: "Untangle", image: "Dessins/Jeux/2.JPG", caption: "Énigme d'Untangle" }
];

const container = document.createElement('div');
container.className = "dessin";


  const h2 = document.createElement('h2');
  h2.textContent = Animés;
  container.appendChild(h2);

  const dessinContainer = document.createElement('div');
  dessinContainer.className = "dessin-container";
  dessinContainer.id = Animés;

  images.forEach(image => {
    const figure = document.createElement('figure');

    const a = document.createElement('a');
    a.href = image.src;
    a.target = "_blank";

    const img = document.createElement('img');
    img.src = image.src;
    img.className = "lien-img";

    const figcaption = document.createElement('figcaption');
    figcaption.textContent = image.caption;

    a.appendChild(img);
    figure.appendChild(a);
    figure.appendChild(figcaption);
    dessinContainer.appendChild(figure);
  });

  container.appendChild(dessinContainer);

document.body.appendChild(container);


