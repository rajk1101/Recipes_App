import { StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";

const styles=StyleSheet.create({
    background:{
        width:"100%",
        height:"100%",
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
    },
    container:{
        // backgroundColor:colors.green,
        flex:1,
        // borderRadius:10,
        paddingHorizontal:15,
        paddingVertical:60,
    },
    title:{
        color:colors.white,
        fontSize:18,
        textAlign:"center",
        fontWeight:'500',
    },
    logo:{
        width:80,
        height:80,
        alignSelf:"center",
        marginBottom:14,
    },
    bigTitle:{
        fontSize:50,
        textAlign:'center',
        fontWeight:'bold',
        color:'white',
        marginBottom:10,
        // paddingHorizontal:30,
    },
    subTitle:{
        fontWeight:60,
        textAlign:'center',
        color:colors.white,
        marginBottom:64,
        marginTop:20,
    },
    button:{
        backgroundColor:'red',
    }
})
export default styles;