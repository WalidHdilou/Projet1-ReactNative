// types/navigation.ts
import { Product } from "./product";

export type RootStackParamList = {
  // L'écran Liste ne reçoit aucun paramètre
  ProductList: undefined;

  // L'écran Détail a besoin qu'on lui passe un objet de type Product
  ProductDetail: { product: Product };
};
