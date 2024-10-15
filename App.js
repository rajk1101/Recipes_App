import "react-native-gesture-handler";
import React, { createContext, useState, useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import { Image, Pressable, StyleSheet } from "react-native";
import Splash from "./src/screens/Splash";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import { getRecipesList } from "./src/https";
import RecipesDetails from "./src/screens/RecipesDetails";

const Stack = createStackNavigator();
export const RecipesContext = React.createContext();
export const HealthyRecipesContext = React.createContext();

const BackButton = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      <Image style={styles.back12} source={require("./assets/backArrow.png")} />
    </Pressable>
  );
};

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff",
  },
};

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [healthyRecipes, setHealthyRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      const rec = await handelRecipesFetch(null,'50');
      setRecipes(rec);
      const healthyRec = await handelRecipesFetch('healthy', '50');
      setHealthyRecipes(healthyRec);  
    })();
  }, []);

  const handelRecipesFetch = async (tags, size) => {
    try {
      const recipes = await getRecipesList(tags, size);
      console.log(recipes); // Move this above the return statement
      return recipes?.data?.results;
    } catch (e) {
      console.log("error fetching recipes: " + e);
    }
  };

  return (
    <HealthyRecipesContext.Provider value={{healthyRecipes, setHealthyRecipes }}>
      <RecipesContext.Provider value={{ recipes, setRecipes }}>
        <NavigationContainer theme={Theme}>
          <Stack.Navigator
            screenOptions={{
              headerTitleAlign: "center",
              headerShawdowVisible: false,
            }}
          >
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: true, // Replacing headerLeft: null
                gestureEnabled: true,
              }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{ headerLeft: (props) => <BackButton {...props} /> }}
            />
            <Stack.Screen
              name="RecipesDetails"
              component={RecipesDetails}
              options={{ headerLeft: (props) => <BackButton {...props}  />, title:""}}
              
            />
          </Stack.Navigator>
        </NavigationContainer>
      </RecipesContext.Provider>
    </HealthyRecipesContext.Provider>
  );
}

const styles = StyleSheet.create({
  back12: {
    width: 24,
    height: 24,
    margin: 16,
  },
});
