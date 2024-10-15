import { StyleSheet } from "react-native";
import colors from "../../constants/colors";


const styles = StyleSheet.create({
  item: {
    // marginTop:80,
    fontSize: 12,
    color: colors.green,
    fontWeight:'bold',
    padding: 8,
    paddingHorizontal:12,
    // paddingVertical:5,
    height:24,
    textTransform:'capitalize'
    // marginLeft:30,
  },
  selectedItem: {
    color: colors.white,
  },
  itemContainer: {
    marginRight: 8,
    marginBottom: 14,
  },
  selectedItemContainer: {
    // borderBottomColor: "#4681A3",
    // borderBottomWidth: 1,
    borderRadius:10,
    backgroundColor:colors.green,
  },
});
export default styles;
