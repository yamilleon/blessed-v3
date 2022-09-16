/*import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import dataFromDB from '../../utils/dataBase'
import getData from '../../utils/getData';
import ItemDetail from './ItemDetail';

function ItemDetailContain() {
    //variables para editar un array a pasar por un filtro y pasar un solo objeto al componente ItemDetail
    const [data, setData] = useState({});
    //variable para recibir la categoria de la ruta de navegacion
    const { categoria } = useParams();
    //variable para recibir el id de la ruta de navegacion y usarlo para identificar nuestro producto a mostrar
    const { id } = useParams();
    //actualiza el contenido del container si se altera la ruta de navegacion.
    useEffect(() => {
        //verifica si hay un id en la ruta
        if (id) {
            //si hay devuelve un objeto con el id que se muestra en la ruta. y lo setea en la variable data.
            getData(2000, dataFromDB.find((element) => element.id == id))
                .then(result => setData(result))
        }
    }, [id, categoria])
    return (
        <div>
            <ItemDetail producto={data} />
        </div >
    )
}

export default ItemDetailContain*/
import React from "react";
import Articles from "../Articles";
import { useState, useEffect } from "react";
import ItemFetch from "./ItemFetch";
import ItemDetail from "./ItemDetail";

export const ItemDetailContainer = ({ cambios }) => {
  const [ListDetail, setListDetails] = useState([]);

  useEffect(() => {
    ItemFetch(2000, Articles[2])
      .then((data) => setListDetails(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(ListDetail);
  return (
    <div className=" d-flex justify-content-center flex-wrap mb-3">
      <ItemDetail ListDetail={ListDetail} />
    </div>
  );
};