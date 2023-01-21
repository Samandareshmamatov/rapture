import React from "react";
import { Header, Hero, Media, Level, Card, CardBox, Footer } from "./components";
import axios from "axios";
import { useEffect } from "react";

function App() {

  const [state, setState] = React.useState([]);
  const [moree, setMoree] = React.useState(true);

  useEffect(() => {
    axios("https://dummyjson.com/products").then((res) => {
      setState(res.data.products)
    });
    console.log("Render eeee ");
  }, [])

  const loadMoree = () => {
    setMoree(!moree);
    console.log("awiuvcnasvasn")
  }
  return <>
      <Header />
      <Hero />
      <Media />
      <Level />
      <CardBox >
        { 
          moree ?<>
            <div className="card-box-container"> {
              state.slice(0, 8).map((el) => {
                return <Card key={el.id +1 } {...el} />
              })   
            }
            </div>
            <button className="btn-card" onClick={loadMoree}>Load More</button>
          </> : <>
            <div className="card-box-container">
              {
              state.map((el) => {
                return <Card key={el.id+1} {...el} />
              }) 
              }
            </div>
            <button className="btn-card" onClick={loadMoree}>Exit</button>
          </>
        }
      </CardBox>
      <Footer />

    </>;
}

export default App;
