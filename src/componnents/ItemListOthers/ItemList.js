import React from "react";
import Item from "./Item";

const ItemList = ({ ListArticles }) => {
  return (
    <>
      {ListArticles.map((aarticles) => (
      <Item articles={aarticles} key={aarticles.id} /> 
      ))}
    </>
  );
};

export default ItemList;
