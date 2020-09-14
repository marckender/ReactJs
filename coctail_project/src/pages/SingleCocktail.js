import React from "react";
import {useParams} from 'react-router-dom'

export default function SingleCocktail() {
  const {id} = useParams();


return <h1>single Coctail page: {id}</h1>;
}
