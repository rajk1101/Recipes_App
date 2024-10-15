import React from "react";
import styles from "./style";
import { Image, Text, TouchableOpacity,View} from "react-native";

const RecipesCard = ({ title, image, style, time, servings  ,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginLeft: 15 }}>
      <View style={[styles.container, style]}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <Text numberOfLines={3} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.label}>Servings</Text>
        <Text style={styles.value}>{servings}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(RecipesCard);
