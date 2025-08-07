import React, { useContext, useEffect, useState } from "react";
import "./css/checkbox.css";
import storeContext from "../hooks/storeContext.js";
import qs from "qs";
export default function Checkbox({ category }) {
  const { setFilter, selectedCategoires, setSelectedCategoires } = useContext(storeContext);

  useEffect(() => {
    const query = qs.stringify({
      filters: {
        categories: {
          id: {
            $in: selectedCategoires,
          },
        },
      },
    });
    setFilter(
      import.meta.env.VITE_API_URL +
        "/products?populate=*&pagination[pageSize]=30&" +
        query
    );
  }, [selectedCategoires]);

  const handleFilter = (e) => {
    const selectedID = e.target.dataset.category;
    const isChecked = e.target.checked;
    setSelectedCategoires((selectedCategoires) => {
      if (isChecked) return [...selectedCategoires, selectedID];
      else return selectedCategoires.filter((id) => id != selectedID);
    });
  };

  return (
    <>
      <div className="toggler-container">
        <span>{category.category}</span>
        <label className="toggler-wrapper style-1">
          <input
            type="checkbox"
            data-category={category.id}
            onChange={handleFilter}
          />
          <div className="toggler-slider">
            <div className="toggler-knob"></div>
          </div>
        </label>
      </div>
    </>
  );
}
