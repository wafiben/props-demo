import "./App.css";
import List from "./Components/List";
import Main from "./Components/Main";

function App() {
  const display = (x) => {
    alert(x);
  };
  const products = [
    {
      id: 1,
      name: "T-shrt",
      price: 55,
      image:
        "http://www.nielsenanimal.com/wp-content/uploads/2018/09/womens-nike-pure-t-shirt-pink-t-shirts_1.jpg",
    },
    {
      id: 2,
      name: "Shorts",
      price: 96,
      image:
        "http://www.nielsenanimal.com/wp-content/uploads/2018/09/mens-nike-2in1-5-inch-flex-running-shorts-grey-shorts.jpg",
    },
    {
      id: 3,
      name: "men-shoes",
      price: 196,
      image:
        "http://www.nielsenanimal.com/wp-content/uploads/2018/09/mens-nike-a-m-infuriate2-m-s91-blackblackwht-trainers.jpg",
    },
  ];

  return (
    <div className="App">
      <List products={products} display={display} />
      <Main>
        <h1>hello</h1>
      </Main>
    </div>
  );
}

export default App;
