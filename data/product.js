// data/products.js
export default [
  {
    id: "1",
    nom: "Nutella (Pâte à tartiner)",
    prix: 4.99,
    description: "Pâte à tartiner aux noisettes et au cacao.",
    image: require("../assets/images/nutella.jpg"),
    enStock: true,
  },
  {
    id: "2",
    nom: "Oreo Original",
    prix: 1.8,
    description: "Biscuits cacaotés fourrés goût vanille.",
    image: require("../assets/images/oreo.png"),
    enStock: true,
  },
  {
    id: "3",
    nom: "Jus d'Orange Tropicana",
    prix: 3.5,
    description: "Jus d'orange 100% pur jus pressé sans pulpe.",
    image: require("../assets/images/jus.png"),
    enStock: false,
  },
  {
    id: "4",
    nom: "Monster Energy",
    prix: 1.25,
    description: "Boisson énergisante gazeuse.",
    image: require("../assets/images/monster.jpg"),
    enStock: true,
  },
];
