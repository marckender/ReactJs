import React, {useState} from "react";
import CocktailsList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

export default function Home() {
  const [loading, setLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState('d');
  const [cocktails, setCocktails] = React.useState([]);
  
  React.useEffect(() =>{

    // set the loader
    setLoading(true);

    async function getDrinks() {
      try {

        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);

        const data = await response.json();

        const {drinks} = data;

        if (drinks) {
          const newCoctails = drinks.map(item => {
            const { idDrink,
                    strDrink,
                    strDrinkThumb,
                    strAlcoholic,
                    strGlass
                  } = item;

            return{ id: idDrink,
                    name: strDrink,
                    image:strDrinkThumb,
                    info: strAlcoholic,
                    glass: strGlass
                  }
          });

          setCocktails(newCoctails)

        } else{
          setCocktails([]);
        }
      } catch(error) {
        console.log(error);
      }

      setLoading(false);
    }

    getDrinks();
  },[searchTerm]);

  return (
    <main>
      <SearchForm setSearchTerm = {setSearchTerm} />
      <CocktailsList loading={loading} cocktails={cocktails} />
    </main>
  )
}
