import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

import Title from "../../components/Title";
import styles from "./style";

const RecipesDetails = ({ route }) => {
  const { item } = route?.params || {};
  const instructions = item?.instructions || [];
  const nutrition = item?.nutrition;
  delete nutrition?.updated_at;
  const nutritionKeys = Object.keys(nutrition || {});
  console.log("item", item);
  console.log(nutritionKeys);

  return (

    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

      <Image
        style={styles.image}
        source={{ uri: item?.thumbnail_url || "default_image_url" }}
        // defaultSource={require('../../assets/default_image.png')} // Example fallback image
      />
      <Title style={{ marginBottom: 32 }} text={item?.name || "Recipe Name"} />
      {nutritionKeys?.map((key) => (
        <View key={key} style={styles.row}>
          <Text style={styles.key}>{key}</Text>
          {/* Check if value is a string or number, otherwise stringify */}
          <Text style={styles.value}>
            {typeof nutrition[key] === "object"
              ? JSON.stringify(nutrition[key])
              : nutrition[key]}
          </Text>
        </View>
      ))}
      <Title style={{ marginBottom: 25 ,marginTop:32 }} text="Instructions:" />
      {instructions?.map((instruction, index) => (
        <View  key={instruction?.id} style={styles.instructionsRow}>
          <Text style={styles.index}>{index + 1}</Text>
          {/* Check if instruction is an object or array */}
          <Text style={styles.instructionText}>
            {instruction?.display_text}
          </Text>
        </View>
      ))}
      {!instructions?.length ?(
        <Text style={styles.value}>No Instrutions found</Text>
      ):null}
        </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(RecipesDetails);
