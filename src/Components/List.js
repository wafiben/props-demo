import React from "react";
import SingleItem from "./SingleItem";

function List({ products,display }) {
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
      {products.map((elt) => (
        <SingleItem key={elt.id} product={elt}  display={display}/>
      ))}
    </div>
  );
}

export default List;
