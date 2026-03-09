import React from "react";
// On importe le NavigationIndependentTree en plus
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BookDetailScreen from "./screens/BookDetailScreen";
import BookListScreen from "./screens/BookListScreen";
import { RootStackParamList } from "./types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    // On isole notre navigation de celle d'Expo avec cette balise
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BookList">
          <Stack.Screen
            name="BookList"
            component={BookListScreen}
            options={{ title: "Ma Bibliothèque" }}
          />

          <Stack.Screen
            name="BookDetail"
            component={BookDetailScreen}
            options={{ title: "Détails du livre" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
