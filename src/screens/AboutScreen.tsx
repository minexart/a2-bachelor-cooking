import React from "react";
import { Pressable, View, Text } from "react-native";

export default function AboutScreen({ navigation }: any) {
  return (
    <View style={{ padding: 30 }}>
      <Text>About(temp)</Text>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Text>Go to Home</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("RecipeList")}>
        <Text>Go to Recipe List</Text>
      </Pressable>
    </View>
  );
}
