import React, { useState } from "react";
// 2. On ajoute Alert aux imports depuis react-native
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Book } from "../types/book";

interface BookCardProps {
  book: Book;
  onPress?: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onPress }) => {
  // 3. État local pour savoir si CE livre précis est en favori (faux par défaut)
  const [isFavorite, setIsFavorite] = useState(false);

  // 4. La fonction pour inverser l'état
  const toggleFavorite = () => {
    const newStatus = !isFavorite;
    setIsFavorite(newStatus);

    // Si on l'ajoute aux favoris, on affiche l'alerte
    if (newStatus) {
      Alert.alert("Succès", `${book.title} a été ajouté aux favoris`, [
        { text: "Compris", style: "default" },
      ]);
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <Image
        source={{ uri: book.cover }}
        style={styles.coverImage}
        resizeMode="contain"
      />

      <View style={styles.textContainer}>
        {/* 5. La nouvelle disposition avec le titre et le coeur côte à côte */}
        <View style={styles.titleRow}>
          <Text style={styles.title} numberOfLines={2}>
            {book.title}
          </Text>

          <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteBtn}>
            <Text>{isFavorite ? "❤️" : "🤍"}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.author}>{book.author}</Text>
        <Text style={styles.genre}>
          {book.genre} ({book.year})
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginVertical: 8,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  coverImage: {
    width: 80,
    height: 120,
    borderRadius: 4,
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },
  // 6. Les nouveaux styles pour le titre et le bouton
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  title: {
    flex: 1, // Permet au titre de prendre toute la place sans écraser le coeur
    fontSize: 16,
    fontWeight: "700",
    color: "#1A1A2E",
    marginBottom: 4,
    lineHeight: 22,
    paddingRight: 8,
  },
  favoriteBtn: {
    padding: 4,
  },
  author: {
    fontSize: 16,
    color: "#444",
  },
  genre: {
    fontSize: 14,
    color: "#888",
    fontStyle: "italic",
  },
});

export default BookCard;
