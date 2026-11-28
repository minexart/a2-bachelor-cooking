import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { findRecipe } from "../data/recipes";
import { COLORS } from "../styles/theme";

export default function RecipeDetailsScreen({ navigation, route }: any) {
  //read the recipe id sent from the list screen
  const recipeId = route.params?.recipeId;
  //look up the full recipe - undefined if the id is missing or wrong
  const recipe = findRecipe(recipeId);

  //missing or invalid data: show a clear message instead of crashing
  if (!recipe) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Sorry, this recipe could not be found.</Text>
        <Pressable style={styles.backButton} onPress={() => navigation.navigate("RecipeList")}>
          <Text style={styles.backText}>Back to Recipe List</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Image source={recipe.image} style={styles.image} />
      <Text style={styles.title}>{recipe.name}</Text>

      {/* quick facts - "Not available" if a value is missing */}
      <View style={styles.infoRow}>
        <Text style={styles.infoBox}>⏱ {recipe.prepTime || "Not available"}</Text>
        <Text style={styles.infoBox}>📊 {recipe.difficulty || "Not available"}</Text>
        <Text style={styles.infoBox}>🍽 {recipe.servings || "?"} servings</Text>
      </View>

      <Text style={styles.sectionTitle}>Ingredients</Text>
      {recipe.ingredients.length === 0 ? (
        <Text style={styles.missing}>No ingredients listed.</Text>
      ) : (
        recipe.ingredients.map((ingredient) => (
          <Text key={ingredient.name} style={styles.listItem}>
            • {ingredient.amount} {ingredient.unit} {ingredient.name}
          </Text>
        ))
      )}

      <Text style={styles.sectionTitle}>Instructions</Text>
      {recipe.steps.map((step, index) => (
        <Text key={index} style={styles.listItem}>
          {index + 1}. {step}
        </Text>
      ))}

      {/* Back button - returns to the Recipe List (required) */}
      <Pressable style={styles.backButton} onPress={() => navigation.navigate("RecipeList")}>
        <Text style={styles.backText}>Back to Recipe List</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: 20 },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    backgroundColor: COLORS.background,
  },
  errorText: { fontSize: 17, color: "#B03030", textAlign: "center", marginBottom: 20 },
  image: { width: "100%", height: 220, borderRadius: 14 },
  title: { fontSize: 26, fontWeight: "bold", color: COLORS.dark, marginTop: 15 },
  infoRow: { flexDirection: "row", flexWrap: "wrap", marginTop: 10 },
  infoBox: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginRight: 8,
    marginBottom: 8,
    color: COLORS.dark,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: COLORS.primary,
    marginTop: 20,
    marginBottom: 8,
  },
  listItem: { fontSize: 15, color: COLORS.dark, lineHeight: 24 },
  missing: { fontSize: 15, color: COLORS.grey, fontStyle: "italic" },
  backButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 25,
  },
  backText: { color: "white", fontSize: 16, fontWeight: "bold" },
});