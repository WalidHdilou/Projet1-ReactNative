import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Product } from '../types/product';

const ProductCard = ({ product }: { product: Product }) => {
return (

<TouchableOpacity style={styles.card}>

<Image
source={{ uri: product.image }}
style={styles.coverImage}
/>

<View style={styles.textContainer}>
<Text style={styles.title}>{product.nom}</Text>
<Text>{product.prix} €</Text>
<Text>{product.enStock ? "En stock" : "Rupture de stock"}</Text>
</View>

</TouchableOpacity>

);
};

const styles = StyleSheet.create({
card: {
flexDirection: 'row', // image + texte côte à côte
backgroundColor: '#fff',
margin: 10,
padding: 10,
borderRadius: 8,

// ombre Android
elevation: 3,

// ombre iOS
shadowColor: '#000',
shadowOpacity: 0.2,
shadowRadius: 4,
shadowOffset: { width: 0, height: 2 }
},

coverImage: {
width: 80,
height: 120,
borderRadius: 4,
},

textContainer: {
flex: 1,
marginLeft: 15,
justifyContent: 'center'
},

title: {
fontSize: 18,
fontWeight: 'bold'
}

});

export default ProductCard;