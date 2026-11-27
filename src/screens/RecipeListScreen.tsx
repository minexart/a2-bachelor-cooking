import React from "react";
import { FlatList, Image, Pressable, View, Text, StyleSheet} from "react-native";
import { categories } from "@/data/recipes";
import { COLORS } from "@/styles/theme";

export default function RecipeListScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choose a recipe</Text>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.category}>
            <Text style={styles.categoryName}>{item.name}</Text>

            {item.recipes.map((recipe) => (
              <Pressable
                key={recipe.id}
                style={styles.recipeCard}
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

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, paddingHorizontal: 15 },
  heading: { fontSize: 22, fontWeight: "bold", color: COLORS.dark, marginVertical: 15 },
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