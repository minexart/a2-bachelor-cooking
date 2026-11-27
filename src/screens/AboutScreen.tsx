import React from "react";
import { Pressable, View, Text, ScrollView, StyleSheet } from "react-native";
import { COLORS } from "../styles/theme";

export default function AboutScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Bachelor Cooking Recipes</Text>
      <Text style={styles.text}>
        Bachelor Cooking is a simple recipe app for students and young adults
        who are cooking for themselves. Every recipe uses easy-to-find
        ingredients, shows how long it takes and how hard it is, and explains
        each step clearly.
      </Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>What can you do ?</Text>
        <Text style={styles.text}>• Browse recipes by category</Text>
        <Text style={styles.text}>• Search for a recipe by name</Text>
        <Text style={styles.text}>• Get a random recipe with Surprise Me</Text>
        <Text style={styles.text}>• Tick off ingredients and change the servings</Text>

      </View>

        <Pressable style={styles.button} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.button}>Back to Home</Text>
        </Pressable>

    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: 25 },
  title: { fontSize: 24, fontWeight: "bold", color: COLORS.dark, marginBottom: 12 },
  text: { fontSize: 15, color: COLORS.grey, lineHeight: 22, marginBottom: 6 },
  card: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    padding: 15,
    marginTop: 15,
    marginBottom: 25,
  },
  cardTitle: { fontSize: 17, fontWeight: "bold", color: COLORS.dark, marginBottom: 8 },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});
