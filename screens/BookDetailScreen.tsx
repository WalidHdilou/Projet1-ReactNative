import { RouteProp } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../types/navigation";

// On type strictement la prop "route" pour que TypeScript connaisse les paramètres
// Note : Assure-toi que ton type dans navigation.ts s'appelle bien 'BookDetail' et non 'BookDetails'
type BookDetailRouteProp = RouteProp<RootStackParamList, "BookDetail">;

interface Props {
  route: BookDetailRouteProp;
}

const BookDetailScreen: React.FC<Props> = ({ route }) => {
  // On extrait le livre des paramètres de navigation passés par l'écran précédent
  const { book } = route.params;

  return (
    // On utilise ScrollView car le synopsis peut être long et dépasser de l'écran
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
    >
      {/* 1. L'image de couverture */}
      <Image
        source={{ uri: book.cover }}
        style={styles.coverImage}
        resizeMode="contain"
      />

      <View style={styles.infoContainer}>
        {/* 2. Le titre */}
        <Text style={styles.title}>{book.title}</Text>

        {/* 3. L'auteur (et on peut même ajouter le genre et l'année pour faire pro !) */}
        <Text style={styles.author}>De : {book.author}</Text>

        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{book.genre}</Text>
          <Text style={styles.badgeText}>{book.year}</Text>
        </View>

        {/* 4. Le synopsis */}
        <View style={styles.synopsisContainer}>
          <Text style={styles.synopsisTitle}>Résumé</Text>
          <Text style={styles.synopsis}>{book.synopsis}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingBottom: 40, // Laisse de l'espace en bas de l'écran pour le confort de lecture
  },
  coverImage: {
    width: "100%",
    height: 300,
    backgroundColor: "#f0f0f0", // Couleur de fond au cas où l'image met du temps à charger
  },
  infoContainer: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  author: {
    fontSize: 18,
    color: "#666",
    fontStyle: "italic",
    marginBottom: 15,
  },
  badgeContainer: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 25,
  },
  badgeText: {
    backgroundColor: "#e0e0e0",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    fontSize: 14,
    color: "#555",
    overflow: "hidden",
  },
  synopsisContainer: {
    marginTop: 10,
  },
  synopsisTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#6200ee", // Un petit soulignement violet pour le style
    alignSelf: "flex-start",
    paddingBottom: 4,
  },
  synopsis: {
    fontSize: 16,
    lineHeight: 24, // Rendre le texte plus aéré et facile à lire
    color: "#444",
    textAlign: "justify",
  },
});

export default BookDetailScreen;
