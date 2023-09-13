/**
 * A simple JSX program (recipes example)
 */

// Recipe objects
const salmon = {
  name: "Baked Salmon",
  ingredients: [
    { name: "Salmon", amount: 1, measurement: "lb" },
    { name: "Pine Nuts", amount: 1, measurement: "cup" },
    { name: "Butter Lettuce", amount: 2, measurement: "cups" },
    { name: "Yellow Squash", amount: 1, measurement: "med" },
    { name: "Olive Oil", amount: 0.5, measurement: "cup" },
    { name: "Garlic", amount: 3, measurement: "cloves" },
  ],
  steps: [
    "Preheat the oven to 350 degrees.",
    "Spread the olive oil around a glass baking dish.",
    "Add the yellow squash and place in the oven for 30 mins.",
    "Add the salmon, garlic, and pine nuts to the dish.",
    "Bake for 15 minutes.",
    "Remove from oven. Add the lettuce and serve.",
  ],
};
const tacos = {
  name: "Fish Tacos",
  ingredients: [
    { name: "Whitefish", amount: 1, measurement: "lb" },
    { name: "Cheese", amount: 1, measurement: "cup" },
    { name: "Iceberg Lettuce", amount: 2, measurement: "cups" },
    { name: "Tomatoes", amount: 2, measurement: "large" },
    { name: "Tortillas", amount: 3, measurement: "med" },
  ],
  steps: [
    "Cook the fish on the grill until cooked through.",
    "Place the fish on the 3 tortillas.",
    "Top them with lettuce, tomatoes, and cheese.",
  ],
};

// The data, an array of Recipe objects
const data = [salmon, tacos];

// A function component for the ingredients part of the recipe
// if data is not provided give empty array
const Ingredients = ({ data = [] }) => (
  <ul className="ingredients">
    {data.map((ingredient, i) => (
      <li key={i}>
        {ingredient.name} ({ingredient.amount} {ingredient.measurement})
      </li>
    ))}
  </ul>
);

// A function component for the instructions part of the recipe
const Instructions = ({ data = [] }) => (
  <section className="instructions">
    <h2>Cooking Instructions</h2>
    {data.map((step, i) => (
      <p key={i}>{step}</p>
    ))}
  </section>
);

// A function component for an individual Recipe
function Recipe({ name, ingredients, steps }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <Ingredients data={ingredients} />
      <Instructions data={steps} />
    </section>
  );
}

// A function component for the Menu of Recipes
function Menu(props) {
  return (
    <article>
      <header>
        <h1>{props.title}</h1>
      </header>
      <div className="recipes">
        {props.recipes.map((recipe, i) => (
          <Recipe key={i} name={recipe.name} ingredients={recipe.ingredients} steps={recipe.steps} />
          /**
           * The JSX spread
           * operator works like the object spread operator. It will add each field of
           * the recipe object as a property of the Recipe component.
           * Don't use below code if you only want to pass a few attributes and not all of them.
           */
          //<Recipe key={i} {...recipe} />
        ))}
      </div>
    </article>
  );
}

// A call to ReactDOM.render to render our Menu into the current DOM
ReactDOM.render(<Menu recipes={data} title="Delicious Recipes" />, document.getElementById("root"));
