// data/products.js
export default [
  {
    id: '1',
    nom: 'Nutella (Pâte à tartiner)',
    prix: 4.99,
    description: 'Pâte à tartiner aux noisettes et au cacao. Un grand classique pour le petit-déjeuner.',
    image: 'https://images.openfoodfacts.org/images/products/301/762/042/2003/front_fr.3.400.jpg',
    enStock: true 
  },
  {
    id: '2',
    nom: 'Oreo Original',
    prix: 1.80,
    description: 'Biscuits cacaotés fourrés goût vanille. Idéal pour le goûter.',
    image: 'https://images.openfoodfacts.org/images/products/762/230/031/5297/front_fr.189.400.jpg',
    enStock: true
  },
  {
    id: '3',
    nom: 'Jus d\'Orange Tropicana',
    prix: 3.50,
    description: 'Jus d\'orange 100% pur jus pressé sans pulpe. Riche en vitamine C.',
    image: 'https://images.openfoodfacts.org/images/products/316/893/001/0150/front_fr.82.400.jpg',
    enStock: false // Produit en rupture de stock !
  },
  {
    id: '4',
    nom: 'Monster Energy',
    prix: 1.25,
    description: 'Boisson énergisante gazeuse avec taurine et caféine.',
    image: 'https://images.openfoodfacts.org/images/products/506/008/608/8425/front_fr.71.400.jpg',
    enStock: true
  }
];