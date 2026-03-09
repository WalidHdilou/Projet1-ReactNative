import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Product } from '../types/product';

type RouteParams = {
  product: Product;
};

type Props = {
  route: {
    params: RouteParams;
  };
};

export default function ProductDetailScreen({ route }: Props) {

  const { product } = route.params;

  return (

    <View style={styles.container}>

      <Image
        source={{ uri: product.image }}
        style={styles.image}
      />

      <Text style={styles.title}>{product.nom}</Text>

      <Text style={styles.price}>{product.prix} €</Text>

      <Text style={styles.description}>{product.description}</Text>

      <Text>
        {product.enStock ? "En stock" : "Rupture de stock"}
      </Text>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },

  price: {
    fontSize: 18,
    marginVertical: 10
  },

  description: {
    textAlign: 'center',
    marginBottom: 10
  }

});