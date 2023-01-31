import React, { useState } from "react";
import { phonesData } from "./Productdata";
import { Card, Button } from "react-bootstrap";

const Product = () => {
    const [items, setItems] = useState(phonesData);

    const decQty=(id) =>{
        const newItem=items.map((item)=>
        item.id===id&&item.qty>1?{...item,qty:item.qty-1}:item
        );
        setItems(newItem);
    };
    const incQty=(id) =>{
        const newItem=items.map((item)=>
        item.id===id?{...item,qty:item.qty+1}:item
        );
        setItems(newItem);
    };

   
  return (
    <div>
      <h1 className="bg-black text-white mb-2">Products</h1>
      {items.map((item) => (
        <div className="d-inline-flex" key={item.id}>
          <Card
            className="shadow p-3 m-2 bg-body-tertiary rounded"
            style={{ width: "13rem" }}
          >
            <Card.Img
              className="p-2"
              style={{ height: "15rem" }}
              variant="top"
              src={require(`./images/${item.image}.jpeg`)}
            />
            <Card.Body>
              <Card.Title>{()=>decQty(item.id)}</Card.Title>
              <Card.Text>{item.disc}</Card.Text>
              <h5>{item.price}</h5>
              <div>
                <p>
                Qty:
                <Button 
                onClick={()=>decQty(item.id)} className="m-2">-
                </Button>
                {item.qty}
                <Button
                 onClick={()=>incQty(item.id)} className="m-2">+
                 </Button>
                 </p>
              </div>
              <Button variant="primary">Add to cart</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Product;
