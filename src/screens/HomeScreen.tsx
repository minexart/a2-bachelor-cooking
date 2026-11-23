import React from 'react';
import {Pressable, View, Text} from 'react-native';

export default function HomeScreen({navigation }: any)
{
    return(
        <View style={{padding:30}}>
            <Text>Home(temp)</Text>
            <Pressable onPress={() => navigation.navigate("RecipeList")}>
               <Text>Go to Recipe List</Text> 
            </Pressable>
            <Pressable onPress={() => navigation.navigate("About")}>
                <Text>Go to About</Text>
            </Pressable>
        </View>
    );
}
