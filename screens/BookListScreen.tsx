import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

import BookCard from "../components/BookCard";
import booksData from "../data/books";
import { Book } from "../types/book";

const BookListScreen: React.FC = () => {
  const [books, setBooks] = useState<Book[]>(booksData);
  const [searchQuery, setSearchQuery] = useState("");

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, "BookList">>();

  // 1, 2 & 3. Le système de filtrage
  // On crée un nouveau tableau qui ne contient que les livres correspondants à la recherche
  const filteredBooks = books.filter((book) =>
    // On passe le titre ET la recherche en minuscules pour éviter les problèmes de majuscules
    book.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📚 Ma Bibliothèque</Text>

        {/* 4a. On met à jour le compteur avec la taille du NOUVEAU tableau */}
        <Text style={styles.headerSubtitle}>
          {filteredBooks.length} livres disponibles
        </Text>

        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher un livre par titre..."
          placeholderTextColor="#94A3B8"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        // 4b. On remplace "books" par "filteredBooks" !
        data={filteredBooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookCard
            book={item}
            onPress={() => {
              navigation.navigate("BookDetail", { book: item });
            }}
          />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    padding: 20,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  searchInput: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    fontSize: 16,
    color: "#1A1A2E",
    marginTop: 12,
  },
  listContent: {
    paddingVertical: 15,
  },
});

export default BookListScreen;
