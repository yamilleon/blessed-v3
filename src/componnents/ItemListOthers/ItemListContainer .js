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
import { Carrousel } from "../Carrousel";
import "bootstrap/dist/css/bootstrap.css";



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
  
  return (<div>
    <div><Carrousel/></div>
    <div className=" d-flex justify-content-around
 flex-wrap mb-3">
            
      <ItemList ListArticles={data} />
    </div>
    </div>
  );
};
