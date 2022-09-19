import { useState, useEffect } from "react";
import Articles from "../Articles";
import ItemList from "./ItemList";
import "../counter.css";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ cambios }) => {
  const [ListArticles, setListArticles] = useState([]);
  const { categoria } = useParams();
  console.log(categoria);

  const customFetch = (articles) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (categoria) {
          resolve(
            Articles.filter((ListArticles) => ListArticles.categoria == categoria)
          );
        } else resolve(Articles);
      }, 2000);
    });
  };

  useEffect(() => {
    customFetch(Articles).then((data) => setListArticles(data));
  }, [categoria]);

  console.log(ListArticles);
  return (
    <div className=" d-flex justify-content-center flex-wrap mb-3">
      <ItemList ListArticles={ListArticles} />
    </div>
  );
};
