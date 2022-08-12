import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function SingleItem({ product,display }) {
    const handleClick=()=>{
        display(product.name)
    }
  console.log(product);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price} $</Card.Text>
        <Button variant="primary" onClick={handleClick}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default SingleItem;
