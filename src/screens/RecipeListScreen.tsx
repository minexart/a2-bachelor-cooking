import React from "react";
import { Pressable, View, Text } from "react-native";

export default function RecipeListScreen({ navigation }: any) {
  return (
    <View style={{ padding: 30 }}>
      <Text>Recipe List (temp)</Text>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Text>Go to Home</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("About")}>
        <Text>Go to About</Text>
      </Pressable>
    </View>
  );
}
