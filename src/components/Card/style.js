import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants/colors";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: width * 0.4,
    borderRadius: 12,
    height:200,
  
    backgroundColor: 'rgba(217,217,217,0.5)',
    padding: 10,
    borderRadius: 10,
    marginVertical: 32,
    marginTop:60,
    // marginBottom:32,
    marginRight:16,
    
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.grey,
    textAlign:'center',
    // flex: 1,
  },
  label:{
    color:colors.lightGrey2,
    fontSize:11,
    marginTop:8,
    marginBottom:4,
    marginVertical:6,

  },
  value:{
    color:colors.grey,
    fontSize:11,
    fontWeight:'bold'
  },
  
  image: {
    width: 100,
    height: 100,
    marginTop:-30,
    borderRadius: 50,
    alignSelf:'center',
    
  },
  footer:{
   justifyContent: "space-between" , marginTop:8
  }
});
export default styles;
