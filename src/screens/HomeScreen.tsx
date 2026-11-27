import React from 'react';
import {Pressable, StyleSheet, View, Text} from 'react-native';
import { COLORS } from '../styles/theme';

export default function HomeScreen({navigation }: any)
{
    return(
        <View style={styles.container}>
            <Text style={styles.emoji}>🍳</Text>
            <Text style={styles.title}>Bachelor Cooking Recipes</Text>
            <Text style={styles.welcome}>
                Welcome! Simple, budget-friendly recipes
                for anyone cooking on their own.
            </Text>
            
            <Pressable style={styles.button} onPress={() => 
                navigation.navigate("RecipeList")}>
               <Text style={styles.buttonText}>View Recipes</Text> 
            </Pressable>

            <Pressable onPress={() => navigation.navigate("About")}>
                <Text>About Us</Text>
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
});