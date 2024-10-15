import React, {useState,useContext,useEffect}from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import styles from "./style";
import Input from "../Input";
import { RecipesContext } from "../../../App";
import Card from "../../components/Card";

const Search = ({navigation}) => {
  const {recipes} = useContext(RecipesContext)
 const [filteredRecipes,setFilteredRecipes] =useState([]);
 const[keyword,setKeyword]=useState('');
 console.log(keyword);
 useEffect(()=>{
  if(keyword?.length> 2){

    const filteredItem=recipes?.filter(rec=>rec?.name?.toLowerCase()?.includes(keyword?.toLowerCase()))
    console.log("filtered item",filteredItem);
    setFilteredRecipes(filteredItem)
  }
  else{
    setFilteredRecipes([]); 
  }
 },[keyword]);
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Search</Text> */}
      <Input autoFocus onChangeText={setKeyword} value={keyword}/>
      <FlatList
      data={filteredRecipes}
      numColumns={2}
      style={{ flexGrow:1}}
      onPress={() => {
        navigation.navigate("RecipesDetails", { item });
      }}
      keyExtractor={item=>String(item?.id)}
      renderItem={({item,index})=>
        <Card
      title={item?.name}
      servings={item?.num_servings}
      image={item?.thumbnail_url}
      rating={item?.user_ratings?.score}
     
      author={
        item?.credits?.length
          ? {
              name: item?.credits[0]?.name,
              image: item?.credits[0]?.image_url,
            }
          : null
      }
    />
      }
      />
    </SafeAreaView>
  );
};
export default React.memo(Search);
