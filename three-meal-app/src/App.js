import "./App.css"
import Menu from "./components/Menu";
import MenuApp from "./components/MenuApp";
import MenuItem from "./components/MenuItem";
import { ReactDOM } from 'react';

const data =
[
  {
    "menuName": "Breakfast",
    "menuItems": [
      {
        "itemId": 5,
        "itemPrice": "6",
        "itemName": "Potato Pancakes",
        "itemDescription": "Breaded and fried pancakes served with sour cream."
      },
      {
        "itemId": 6,
        "itemPrice": "8",
        "itemName": "Eggs Benedict",
        "itemDescription": "Served on an English muffin with ham and hollandaise sauce."
      },
      {
        "itemId": 7,
        "itemPrice": "5",
        "itemName": "Bacon and Eggs",
        "itemDescription": "Traditional and classic breakfast option with multiple options as you like your eggs cooked."
      }
    ]
  },
  {
    "menuName": "Lunch",
    "menuItems": [
      {
        "itemId": 10,
        "itemPrice": "9",
        "itemName": "Egg Salad",
        "itemDescription": "Chopped eggs with mustard and mayonnaise served on toasted bread of your choice."
      },
      {
        "itemId": 11,
        "itemPrice": "8",
        "itemName": "Chicken Wrap",
        "itemDescription": "Wrapped on a flatbread with tomatoes, lettuce, and how you'd like your chicken cooked, sauces are optional."
      },
      {
        "itemId": 12,
        "itemPrice": "5",
        "itemName": "Pizza",
        "itemDescription": "One slice of pizza of your choice."
      },
    ]
  },

  {
    "menuName": "Dinner",
    "menuItems": [
      {
        "itemId": 1,
        "itemPrice": "12",
        "itemName": "Lasagne",
        "itemDescription": "Meat and cheese layered between house-made pasta with bell peppers and onions."
      },
      {
        "itemId": 2,
        "itemPrice": "10",
        "itemName": "Cheese Ravioli",
        "itemDescription": "Cheese-filled ravioli served with house red sauce."
      },
      {
        "itemId": 3,
        "itemPrice": "14",
        "itemName": "Chicken Parmesan",
        "itemDescription": "Breaded chicken topped with marinara sauce and lots of cheese served over house made spaghetti."
      }
    ]
  },
  {
    "menuName": "Dessert",
    "menuItems": [
      {
        "itemId": 45,
        "itemPrice": "10",
        "itemName": "Chocolate Lava Cake",
        "itemDescription": "Dark chocolate molten lava cake. Serves 2-3."
      },
      {
        "itemId": 47,
        "itemPrice": "8",
        "itemName": "Tiramisu",
        "itemDescription": "Layers of espresso-soaked ladyfingers and marscarpone cream topped with cocoa and espresso powder."
      },
      {
        "itemId": 49,
        "itemPrice": "5",
        "itemName": "Cannolis",
        "itemDescription": "Three flaky pastries enclosing a rich, ricotta filling dotted with decadent chocolate chips."
      },
      {
        "itemId": 50,
        "itemPrice": "5",
        "itemName": "Cappuccino",
        "itemDescription": "Steamed milk with two ristretto shots of espresso."
      }
    ]
  }
]

const MenuHead = (props) => { 
    const myColor = {
        color: "white",
        backgroundColor: "Tomato",
        padding: "10px",
        textAlign: "center",
    };

    return(
        <>
        <h1 style = {myColor}>{props.clubName}</h1>
        </>
    );
}

const MenuQuote = (slogan) => {
  const myFont = {
    fontStyle: "italic",
    fontSize: "14px",
    textAlign: "center",
  };

return (
  <>
  <p style = {myFont}>{slogan.quoteName}</p>
  </>
)
};



function App() {
  return (
    <>
    <MenuHead clubName = {"Welcome To The Food Club!"}/>
    <MenuQuote quoteName = {"The Breakfast Club may be a good movie, but The Food Club is a good place to eat!"}/>
    <MenuApp data = {data}/>
    </>
    );
}
export default App
