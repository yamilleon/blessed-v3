import { useState, useEffect } from "react";
import Articles from "./Articles";
import { customFetch } from "./customFetch";
import ItemList from "./ItemList";
import "./counter.css"


 export const ItemListContainer = ({
  cambios,
}) => {

  const [ListArticles, setListArticles] = useState ([])

  useEffect(() => {
    customFetch(Articles)
    .then(data=> setListArticles(data))
  
  },[])
  
  console.log(ListArticles)
  return (
    <div className= " d-flex justify-content-center flex-wrap mb-3">
     <ItemList ListArticles={ListArticles}/>
    </div>
  );
};
