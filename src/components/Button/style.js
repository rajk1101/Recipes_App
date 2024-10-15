import { StyleSheet } from "react-native";
import colors from "../../constants/colors"; // Ensure this path is correct

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // flex: 1, // Uncomment if you need to expand container to fill available space
    width: "80%",
    alignSelf: "center",
    borderRadius: 20,
    padding: 15,
    marginTop: 50,
    height:"20%",
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "500",
    
  },
  icon1: {
    width: 30, // Changed from string '20' to number 20
    height: 30, // Changed from string '20' to number 20
    marginLeft:20,
  },
});

export default styles;
