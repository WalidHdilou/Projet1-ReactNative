import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, StatusBar } from 'react-native';

import { Product } from '../types/product';
import products from '../data/product';
import ProductCard from '../components/ProductCard';

export default function ProductListScreen() {

return (

<SafeAreaView style={styles.container}>

<FlatList
data={products} 
keyExtractor={(item) => item.id}
renderItem={({ item }) => (
<ProductCard product={item} />
)}
showsVerticalScrollIndicator={false}
/>

</SafeAreaView>

);
}

const styles = StyleSheet.create({
container: {
flex: 1,
paddingTop: StatusBar.currentHeight
}
});