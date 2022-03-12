import React from "react";
import { Link, useParams } from "react-router-dom";
let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

const SingleDrink = () => {
  const { id } = useParams();
  const [drink, setDrink] = React.useState(null);

  async function fetchDrink() {
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();

      if (data["drinks"]) {
        const {
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strCategory: category,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data["drinks"][0];

        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];

        const newDrink = {
          name,
          image,
          info,
          category,
          glass,
          instructions,
          ingredients,
        };

        setDrink(newDrink);
      }
    } catch (e) {}
  }

  React.useEffect(() => {
    fetchDrink();
  }, [id]);

  if (!drink) {
    return <h2>No Drinks to display</h2>;
  } else {
    let { name, image, info, category, glass, instructions, ingredients } =
      drink;

    return (
      <section className="section">
          <Link className="btn btn-primary" to={'/'}>Back Home</Link>
        <h2 className="section-title">{name}</h2>
        <img src={image} alt={name} />
        <div className="drink-info">
            <p>
                <span className="drink-data">category: </span> {category}
            </p>
            <p>
                <span className="drink-data">info: </span> {info}
            </p>
            <p>
                <span className="drink-data">glass: </span> {glass}
            </p>
            <p>
                <span className="drink-data">instructions: </span> {instructions}
            </p>
            <p>
                <span className="drink-data">ingredients: </span> 
                {ingredients.map((item, idx) => {
                    return item ? <span key={idx}> {item} </span> : null
                })}
            </p>
        </div>
      </section>
    );
  }
};

export default SingleDrink;
