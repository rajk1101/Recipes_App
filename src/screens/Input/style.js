import { StyleSheet } from "react-native";
import colors from "../../constants/colors"; // Ensure this path is correct

const styles = StyleSheet.create({
  container: {
    // width: "95%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    height: 50,
    marginVertical: 16,
    marginHorizontal:8,
    borderRadius:8
  },
  input: {
    color: colors.black,
    fontSize: 14,
    flex:1,
  },
  icon23: {
    width: 24, // Changed from string '20' to number 20
    height: 24, // Changed from string '20' to number 20
    margin: 10,
  },
});

export default styles;
