import React from "react";
import styles from "./style";
import { Image, Text, TouchableOpacity, View, ViewComponent } from "react-native";
import Rating from "../Rating";

const RecipesCard = ({ title, image, style, author, rating, time,onPress }) => {

  // console.log("print image url :" ,image);
  
  return (
    <TouchableOpacity  onPress={onPress} style={[styles.container, style]}>
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Rating rating={rating} />
        </View>
        {/* <Image style={styles.image} source={{ url: image }} /> */}
        <Image style={styles.image} source={{ uri: image }} resizeMode="cover" />
      </View>
      <View
        style={[
          styles.footer,
          { flexDirection: "row", justifyContent: "space-between" },
        ]}
      >
        <View style={styles.row}>
          {author?.image ? (
            <Image style={styles.authorImage} source={{ url: author.image }} />
           ):<View/>}
          <Text style={styles.footerText}>By {author?.name}</Text>
        </View>
        
         <View style={styles.row}>
          <Image
            style={styles.timerIcon}
            source={require("../../../assets/timer.png")}
          />
          <Text style={styles.footerText}>{time} min</Text>
        </View>
        
      
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(RecipesCard);
