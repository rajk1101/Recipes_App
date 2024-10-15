import { StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
marginHorizontal:5,
    padding: 24,
  
  },
  image:{
    
    // flex:1,
    width:'100%',
    height:180,
    borderRadius:10, 
    borderColor:'grey',
    marginBottom:10,
    // marginHorizontal:,
    borderWidth:1

  },
  row:{
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'rgba(217,217,217,0.5)',
    borderRadius:8,
    padding:8,paddingVertical:10,
    marginVertical:4,
  },
  key:{
    fontSize:12,
    color:colors.black,
    textTransform:'capitalize'
  },
  value:{
    fontSize:12,
    color:colors.black
  },
  instructionsRow:{
    flexDirection:"row",
    alignItems:'center',
    marginVertical:5

  },
  
  index:{
    fontSize:15,
    color:colors.grey2,
    // textTransform:'capitalize',
    marginRight:16,
    
    
  },
  instructionText:{
    fontSize:14,
    color:colors.black,
    flex:1,

  }


});
export default styles;
