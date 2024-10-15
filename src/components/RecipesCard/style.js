import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: width * 0.6,
    borderRadius: 10,
  
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 16,
    marginTop:46,
    marginRight:16,
    marginBottom:32,
    shadowColor: "#000",
    // for ios
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    //Android
    elevation: 9,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.grey,
    flex: 1,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
  },
  footerText: {
    color: colors.lightGrey2,
    fontSize: 11,
  },
  authorImage: {
    width: 25,
    height: 25,
    marginRight: 20,
    borderRadius: 5,
    backgroundColor:colors.grey,
  },
  timerIcon: {
    width: 17,

    height: 17,
    marginRight: 8,
  },
  image: {
    width: 80,
    height: 80,
    marginTop:-40,
    borderRadius: 50,
    // borderColor : "black",
    // borderWidth : 4
  },
  footer:{
   justifyContent: "space-between" , marginTop:8,
  }
});
export default styles;
