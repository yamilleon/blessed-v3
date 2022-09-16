
import React from "react";
import Articles from "../Articles";
import { useState, useEffect } from "react";
import ItemFetch from "./ItemFetch";
import ItemDetail from "./ItemDetail";
import "./ItemDetail.css"

export const ItemDetailContainer = ({ cambios }) => {
  const [ListDetail, setListDetails] = useState([]);

  useEffect(() => {
    ItemFetch(2000, Articles[1])
      .then((data) => setListDetails(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(ListDetail);
  return (
    <div className=" boton d-flex justify-content-center flex-wrap mb-3">
      <ItemDetail ListDetail={ListDetail} />
    </div>
  );
};
