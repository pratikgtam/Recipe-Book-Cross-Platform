import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import RecipeList from "./RecipeList";

const RecipesScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <RecipeList
        recipes={[
          {
            id: "1",
            name: "Pasta",
            imageUrl: "https://source.unsplash.com/1600x900/?pasta",
            timeToPrepare: 20,
            description: "Delicious pasta with tomato sauce",
          },

          {
            id: "2",
            name: "Pizza",
            imageUrl: "https://source.unsplash.com/1600x900/?pizza",
            timeToPrepare: 30,
            description: "Delicious pizza with cheese and tomato",
          },

          {
            id: "3",
            name: "Burger",
            imageUrl: "https://source.unsplash.com/1600x900/?burger",
            timeToPrepare: 25,
            description: "Delicious burger with cheese and tomato",
          },

          {
            id: "4",
            name: "Salad",
            imageUrl: "https://source.unsplash.com/1600x900/?salad",
            timeToPrepare: 15,
            description: "Delicious salad with lettuce and tomato",
          },
          {
            id: "4",
            name: "Salad",
            imageUrl: "https://source.unsplash.com/1600x900/?salad",
            timeToPrepare: 15,
            description: "Delicious salad with lettuce and tomato",
          },
          {
            id: "4",
            name: "Salad",
            imageUrl: "https://source.unsplash.com/1600x900/?salad",
            timeToPrepare: 15,
            description: "Delicious salad with lettuce and tomato",
          },
          {
            id: "4",
            name: "Salad",
            imageUrl: "https://source.unsplash.com/1600x900/?salad",
            timeToPrepare: 15,
            description: "Delicious salad with lettuce and tomato",
          },
          {
            id: "4",
            name: "Salad",
            imageUrl: "https://source.unsplash.com/1600x900/?salad",
            timeToPrepare: 15,
            description: "Delicious salad with lettuce and tomato",
          },
          {
            id: "4",
            name: "Salad",
            imageUrl: "https://source.unsplash.com/1600x900/?salad",
            timeToPrepare: 15,
            description: "Delicious salad with lettuce and tomato",
          },
        ]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: "90%",
    alignSelf: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default RecipesScreen;
