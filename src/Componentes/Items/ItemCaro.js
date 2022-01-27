import React, { useState } from "react";

import ItemFecha from "./ItemFecha";
import Card from "../UI/Card";
import "./ItemCaro.css";

function ItemCaro(props) {

   const [title, setTitle ] = useState(props.title);
   console.log("ItemCato Evaluado por React");

    const ClickHandler = () => {
        setTitle("Update!!");
        console.log(title);

    };
    return (
        <Card className="expense-item">
            <ItemFecha date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price" >${props.amount}</div>
            </div>
            <button onClick={ClickHandler}>Cambiar el titulo</button>
        </Card>
    );
}
export default ItemCaro; 