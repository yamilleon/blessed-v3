import React from "react";
import Articles from "../Articles";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = ({ cambios }) => {
  const [ListDetail, setListDetails] = useState([]);
  const { id } = useParams();
  console.log(id);

  const ItemFetch = (articles) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id) {
          resolve(
            Articles.find((ListDetail) => ListDetail.id == id)
          );
        } else resolve(Articles);
      }, 2000);
    });
  };

  useEffect(() => {
    ItemFetch(id).then((data) => setListDetails(data));
  }, [id]);

  console.log(ListDetail);

  return (
    <div className="  d-flex justify-content-center flex-wrap mb-3">
      <ItemDetail ListDetail={ListDetail} />
    </div>
  );
};
