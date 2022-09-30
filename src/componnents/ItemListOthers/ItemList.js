import React from "react";
import Item from "./Item";

const ItemList = ({ ListArticles }) => {
  return (
    <>
      {ListArticles.map((articles) => (
      <Item articles={articles} key={articles.id} /> 
      ))}
    </>
  );
};

export default ItemList;
