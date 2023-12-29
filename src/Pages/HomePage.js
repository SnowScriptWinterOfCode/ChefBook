import "../App.css";
import Recipe from "./Recipe";
import mainLogo from "../components/icon.png";
import { useRecipe } from "../context/recipeContext";
import { memo } from "react";
function HomePage() {
  const {
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
  } = useRecipe();

  return (
    <div className="App">
      <img
        alt=""
        src={mainLogo}
        width="100"
        height="100"
        className="logo"
        text-align="center"
      />
      <h1 className="heading" style={myStyle}>
        Tasty Tips
      </h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={handleSearch}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSearch(e.target.value);
              // console.log("search: ", e.target.value)
            }
          }}
        ></input>
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>

      <div className="form-check form-switch">
        <input
          className="form-check-input ms-5"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={toggleMode}
        ></input>
      </div>
      <div className="container">
        {recipes.slice(0, visible).map((r, i) => (
          <Recipe
            key={i}
            title={r.recipe.label}
            calories={Math.round(r.recipe.calories)}
            img={r.recipe.image}
            url={r.recipe.url}
            ingredients={r.recipe.ingredients}
            myStyle={myStyle}
            cardStyle={cardStyle}
          />
        ))}
      </div>
      <div className="button-container">
        <button className="loadMoreButton" onClick={showMoreItems}>
          Load More Recipes
        </button>
      </div>
    </div>
  );
}

export default memo(HomePage);
