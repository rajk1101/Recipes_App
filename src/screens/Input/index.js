import React from "react";
import { Image, Pressable, View, TextInput, StyleSheet } from "react-native";
import colors from "../../constants/colors";
import styles from "./style";

const Input = ({  showSearchIcon, pressable, onPress, style,...props }) => {
  const renderInput = () => (
    <View style={[styles.container, style]}>
      {showSearchIcon ? (
        <Image style={styles.icon23} source={require('../../../assets/searchNormal.png')} />
      ) : null}
      <TextInput
        {...props}
        editable={!pressable}
        placeholderTextColor={colors.lightGrey}
        style={styles.input}
      
      />
    </View>
  );

  if (pressable) {
    return (
      <Pressable onPress={onPress}>
        {renderInput()}
      </Pressable>
    );
  }

  return renderInput();
};

Input.defaultProps = {
  placeholder: 'Search Recipe',
  showSearchIcon: true,
};

export default React.memo(Input);