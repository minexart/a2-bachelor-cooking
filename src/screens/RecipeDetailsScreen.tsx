import React, { useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { categories } from "@/data/recipes";
import { COLORS } from "@/styles/theme";

export default function RecipeListScreen({ navigation }: any) {
  //state/var for the search box text (from Kavenash)
  const [searchText, setSearchText] = useState("");

  //keep only recipes whose name matches searchText (not case sensitive),
  //then hide categories that end up with 0 recipes
  const filteredCategories = categories
    .map((category) => ({
      ...category,
      recipes: category.recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchText.toLowerCase())
      ),
    }))
    .filter((category) => category.recipes.length > 0);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choose a recipe</Text>

      {/* Feature 1: Search (label required) */}
      <Text style={styles.feature}>Feature 1: Search</Text>
      <TextInput
        style={styles.searchBox}
        placeholder="🔍 Search recipes..."
        placeholderTextColor="#999"
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* FlatList loops over the filtered categories */}
      <FlatList
        data={filteredCategories}
        keyExtractor={(item) => item.id}
        //shown when nothing matches the search
        ListEmptyComponent={
          <Text style={styles.empty}>No recipes match "{searchText}".</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.category}>
            <Text style={styles.categoryName}>{item.name}</Text>

            {item.recipes.map((recipe) => (
              <Pressable
                key={recipe.id}
                //highlight card while pressed (from Kavenash)
                style={({ pressed }) => [
                  styles.recipeCard,
                  pressed && styles.cardPressed,
                ]}
                onPress={() =>
                  navigation.navigate("RecipeDetails", { recipeId: recipe.id })
                }
              >
                <Image source={recipe.image} style={styles.image} />
                <View style={styles.recipeInfo}>
                  <Text style={styles.recipeName}>{recipe.name}</Text>
                  <Text style={styles.recipeMeta}>
                    {recipe.prepTime} · {recipe.difficulty}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>
        )}
        //Back button at the bottom of the list
        ListFooterComponent={
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.backText}>Back to Home</Text>
          </Pressable>
        }
      />
    </View>
  );
}

//external styling
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, paddingHorizontal: 15 },
  heading: { fontSize: 22, fontWeight: "bold", color: COLORS.dark, marginVertical: 15 },
  feature: { fontSize: 12, color: COLORS.grey, marginBottom: 4 },
  searchBox: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    padding: 12,
    fontSize: 15,
    color: COLORS.dark,
    marginBottom: 15,
  },
  empty: { fontSize: 15, color: COLORS.grey, textAlign: "center", marginTop: 30 },
  category: { marginBottom: 20 },
  categoryName: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 8,
  },
  recipeCard: {
    flexDirection: "row",
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  cardPressed: {
    opacity: 0.7,
    backgroundColor: COLORS.border,
  },
  image: { width: 80, height: 80, borderRadius: 10 },
  recipeInfo: { marginLeft: 12, flex: 1 },
  recipeName: { fontSize: 16, fontWeight: "bold", color: COLORS.dark },
  recipeMeta: { fontSize: 14, color: COLORS.grey, marginTop: 4 },
  backButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
  },
  backText: { color: "white", fontSize: 16, fontWeight: "bold" },
});