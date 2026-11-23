import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import AboutScreen from "@/screens/AboutScreen";
import HomeScreen from "@/screens/HomeScreen";
import RecipeDetailsScreen from "@/screens/RecipeDetailsScreen";
import RecipeListScreen from "@/screens/RecipeListScreen";
import { COLORS } from "./src/styles/theme";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Bachelor Cooking" }}
        />

        <Stack.Screen
          name="RecipeList"
          component={RecipeListScreen}
          options={{ title: "Recipes" }}
        />
        <Stack.Screen
          name="RecipeDetails"
          component={RecipeDetailsScreen}
          options={{ title: "Recipe Details" }}
        />

        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: "About Us" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
