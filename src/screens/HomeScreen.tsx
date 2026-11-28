import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { allRecipes } from "../data/recipes";
import { COLORS } from "../styles/theme";

export default function HomeScreen({ navigation }: any) {
  //pick a random recipe and open its details
  function surpriseMe() {
    if (allRecipes.length === 0) {
      return;
    }
    const randomIndex = Math.floor(Math.random() * allRecipes.length);
    const randomRecipe = allRecipes[randomIndex];
    navigation.navigate("RecipeDetails", { recipeId: randomRecipe.id });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🍳</Text>
      {/* app title and welcome message */}
      <Text style={styles.title}>Bachelor Cooking Recipes</Text>
      <Text style={styles.welcome}>
        Welcome! Simple, budget-friendly recipes for anyone cooking on their own.
      </Text>

      {/* goes to the Recipe List screen */}
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("RecipeList")}
      >
        <Text style={styles.buttonText}>View Recipes</Text>
      </Pressable>

      {/* goes to the About Us screen */}
      <Pressable
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate("About")}
      >
        <Text style={[styles.buttonText, styles.secondaryText]}>About Us</Text>
      </Pressable>

      {/* Feature 2: Surprise Me (label required) */}
      <Text style={styles.feature}>Feature 2: Surprise Me</Text>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          styles.surpriseButton,
          pressed && styles.buttonPressed,
        ]}
        onPress={surpriseMe}
      >
        <Text style={styles.buttonText}>🎲 Surprise Me!</Text>
      </Pressable>
    </View>
  );
}

//external styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  emoji: { fontSize: 60, marginBottom: 10 },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.dark,
    textAlign: "center",
  },
  welcome: {
    fontSize: 16,
    color: COLORS.grey,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    width: "80%",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
  },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
  secondaryButton: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  secondaryText: { color: COLORS.primary },
  feature: {
    fontSize: 12,
    color: COLORS.grey,
    marginTop: 8,
    marginBottom: 4,
  },
  surpriseButton: {
    backgroundColor: COLORS.dark,
  },
  buttonPressed: {
    opacity: 0.7,
  },
});