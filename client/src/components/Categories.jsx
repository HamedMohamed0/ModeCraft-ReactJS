import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch.js";
import Checkbox from "./Checkbox.jsx";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const { data, error } = useFetch(
    "/categories?populate=*&pagination[pageSize]=30"
  );

  useEffect(() => {
    data && setCategories(data);
  }, [data]);
  return (
    <>
      {categories.map((category) => (
        <Checkbox key={category.id} category={category} />
      ))}
    </>
  );
}
