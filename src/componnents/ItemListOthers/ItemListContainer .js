import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "../counter.css";
import { useParams } from "react-router-dom";
import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from "firebase/firestore";



  export const ItemListContainer = ({ cambios }) => {
    const [data, setData] = useState([]);
    const { categoria } = useParams();
  
    useEffect(() => {
      const querydb = getFirestore();
      const queryCollection = collection(querydb, "articles");
      if (categoria) {
        const queryFilter = query(
          queryCollection,
          where("categoria", "==", categoria),
        );
        getDocs(queryFilter).then((res) =>
          setData(
            res.docs.map((articles) => ({ id: articles.id, ...articles.data() })),
          ),
        );
      } else {
        getDocs(queryCollection).then((res) =>
          setData(
            res.docs.map((articles) => ({ id: articles.id, ...articles.data() })),
          ),
        );
      }
    }, [categoria]);
  
  return (
    <div className=" d-flex justify-content-center flex-wrap mb-3">
      <ItemList ListArticles={data} />
    </div>
  );
};
