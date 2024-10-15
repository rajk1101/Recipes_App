import axios from "axios"

export const getRecipesList= async (tags = null,size)=>{
    const options={
        method:'GET',
        params:{from:'0',size:size ||'20',tags},
        url:'https://tasty.p.rapidapi.com/recipes/list',
        headers:{
            'x-rapidapi-key': '4c822c07e1mshe7590ff60e63b87p1af079jsnddb64cf42182',
            'x-rapidapi-host': 'tasty.p.rapidapi.com'

        }
    };
     return await axios.request(options)
}

