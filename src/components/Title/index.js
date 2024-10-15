import React from "react";
import styles from "./style";
import { Text } from "react-native";



const Title=({text,style})=>{
    return(
        <Text style={[styles.title,style]}>{text}</Text>
    )
};

Title.defaultProps={
    text:'Title'
}

export default React.memo(Title);