import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";


export const ItemDetailContainer = ({ cambios }) => {
  const [ListDetail, setListDetails] = useState([]);
  const { id } = useParams();
 
 
  
  useEffect(() => {
		const querydb = getFirestore();
		const queryDoc = doc(querydb, "articles", id);
		getDoc(queryDoc).then((res) => setListDetails ({ id: res.id, ...res.data() }));
	}, [id]);


  return (
    <div className=" d-flex justify-content-center flex-wrap mb-3">
      <ItemDetail ListDetail={ListDetail} />
    </div>
  );
};
