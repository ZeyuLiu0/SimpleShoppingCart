import { useState } from "react";
import "./Size.css";
export const availableSizes = ["XS", "S", "M", "ML", "L", "XL", "XXL"];
export default function Size({ selectedSizes, setSelectedSizes }) {
  function handleClick(size) {
    setSelectedSizes((prevSelectedSizes) => {
      if (prevSelectedSizes.includes(size)) {
        return prevSelectedSizes.filter((s) => s !== size);
      } else {
        return [...prevSelectedSizes, size];
      }
    });
  }
  return (
    <>
      <div className="sizeSection">
        <h1>Size:</h1>
        <div className="sizeList">
          {availableSizes.map((size) => {
            const isClicked = selectedSizes.includes(size);
            return (
              <div
                onClick={() => handleClick(size)}
                className={`sizeItem ${isClicked ? "clicked" : ""}`}
                key={size}
              >
                {size}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
