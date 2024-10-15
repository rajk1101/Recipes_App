import { React, useContext, useState, useEffect } from "react";
import { FlatList, SafeAreaView, ActivityIndicator, View, StyleSheet } from "react-native";
import Input from "../Input";
import styles from "./style";
import Title from "../../components/Title";
import RecipesCard from "../../components/RecipesCard";
import Card from "../../components/Card";
import Categories from "../../components/Categories";
import { HealthyRecipesContext, RecipesContext } from "../../../App";

const Home = ({ navigation }) => {
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState(null);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  const { healthyRecipes } = useContext(HealthyRecipesContext);
  const { recipes } = useContext(RecipesContext);

  // Fetch tags and update filtered recipes
  useEffect(() => {
    if (recipes) {
      const tagsList = [];
      recipes.forEach((recipe) => {
        recipe?.tags?.forEach((tag) => {
          if (!tagsList.includes(tag?.name)) {
            tagsList.push(tag?.name);
          }
        });
      });
      setTags(tagsList);
      setFilteredRecipes(recipes);
      setLoading(false); // Set loading to false after data is ready
    }
  }, [recipes]);

  // Update filtered recipes based on selected tags
  useEffect(() => {
    if (selectedTags) {
      const filteredItem = recipes?.filter((rec) =>
        rec?.tags.some((t) => t?.name === selectedTags)
      );
      setFilteredRecipes(filteredItem);
    } else {
      setFilteredRecipes(recipes);
    }
  }, [selectedTags, recipes]);

  // If loading, show ActivityIndicator (Spinner)
  if (loading) {
    return (
      <View style={localStyles.loadingContainer}>
        <ActivityIndicator size="large" color="#00bfff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Input
        pressable
        onPress={() => navigation.navigate("Search")}
        style={{
          height: 50,
          flexDirection: "row",
          marginHorizontal: 10,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "#ccc",
        }}
      />

      <Title style={{ marginLeft: 10 }} text="Healthy Recipes" />

      <FlatList
        horizontal
        style={{ marginHorizontal: -24 }}
        data={healthyRecipes}
        keyExtractor={(item) => String(item?.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <RecipesCard
            title={item?.name}
            onPress={() => navigation.navigate("RecipesDetails", { item })}
            time={item?.cook_time_minutes}
            image={item?.thumbnail_url}
            rating={item?.user_ratings?.score}
            style={index === 0 ? { marginLeft: 35 } : {}}
            author={
              item?.credits?.length
                ? { name: item?.credits[0]?.name }
                : null
            }
          />
        )}
      />

      <Categories
        categories={tags}
        selectedCategory={selectedTags}
        onCategoryPress={setSelectedTags}
      />

      <FlatList
        horizontal
        style={{ marginHorizontal: -24 }}
        data={filteredRecipes}
        keyExtractor={(item) => String(item?.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Card
            title={item?.name}
            servings={item?.num_servings}
            image={item?.thumbnail_url}
            onPress={() => navigation.navigate("RecipesDetails", { item })}
            rating={item?.user_ratings?.score}
            style={index === 0 ? { marginLeft: 35 } : {}}
            author={
              item?.credits?.length
                ? {
                    name: item?.credits[0]?.name,
                    image: item?.credits[0]?.image_url,
                  }
                : null
            }
          />
        )}
      />
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5", // Optional background color for loading screen
  },
});

export default Home;
