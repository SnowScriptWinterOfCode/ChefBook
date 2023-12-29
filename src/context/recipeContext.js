import { createContext, useContext, useEffect, useState } from "react";

const RecipeContext = createContext();

function RecipeProvider({ children }) {
  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };
  const APP_ID = "d7811cd0";
  const APP_KEY = "3baec572c48af715772e8deac52d7572";

  const getRecipes = () => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRecipes(data.hits);
        //console.log(data);
      });
  };

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("bread");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const [mode, setMode] = useState("light");
  const [myStyle, setStyle] = useState({
    color: "black",
  });
  const [cardStyle, setCard] = useState({
    display: "inline-block",
    width: 300,
    marginLeft: 100,
    marginTop: 5,
    marginRight: 5,
    backgroundColor: "#5ab260",
  });
  /*const[imageStyle,setImage]=useState({
    height:200
    

    
  })*/
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.querySelector(".App").style.backgroundImage =
        "radial-gradient(black,black,black)";

      setStyle({
        color: "white",
      });
      setCard({
        display: "inline-block",
        width: 300,
        marginLeft: 100,
        marginTop: 5,
        marginRight: 5,
        backgroundColor: "black",
      });
    } else {
      setMode("light");
      document.querySelector(".App").style.backgroundImage =
        "linear-gradient(to right, #aa8b56 0%, #f0ebce 100%)";

      setStyle({
        color: "black",
      });
      setCard({
        display: "inline-block",
        // borderWidth: 2,
        // borderStyle: "solid",
        backgroundColor: "#5ab260",
        width: 300,
        marginLeft: 100,

        marginTop: 5,
        marginRight: 5,
      });
    }
  };
  return (
    <RecipeContext.Provider
      value={{
        myStyle,
        getSearch,
        search,
        handleSearch,
        setSearch,
        toggleMode,
        visible,
        recipes,
        cardStyle,
        showMoreItems,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
}

function useRecipe() {
  const context = useContext(RecipeContext);
  if (!context)
    throw new Error("Recipe Context used outside the RecipeProvider ");
  return context;
}
export { RecipeProvider, useRecipe };
