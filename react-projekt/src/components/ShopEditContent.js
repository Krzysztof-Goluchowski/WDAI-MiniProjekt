import "./shop.css";
import {PRODUCTS} from "../products";
import React, {useContext, useState} from "react";

function ShopContentEdit() {
    const [editingIndex, setEditingIndex] = useState(-1);
    const [editedPrice, setEditedPrice] = useState("");

    const handleEditClick = (index) => {
        setEditingIndex(index);
        setEditedPrice(PRODUCTS[index].price);
    };

    const handleSaveClick = () => {
        PRODUCTS[editingIndex].price = editedPrice;
        setEditingIndex(-1);
    };

    const handleCancelClick = () => {
        setEditingIndex(-1);
    };

    return (<div className="shopEditContainer">
        <div className={"shopProducts"}>
            {PRODUCTS.map((product, index) => (
                <div key={product.id} className="productShop">
                    <img src={product.productImage} alt={product.productName} className="productPhoto"/>
                    <p className="price">{product.productName}</p>
                    <p className="price">{`$${product.price}`}</p>
                    <strong>Cena: </strong>
                    {editingIndex === index ? (
                        <input
                            type="text"
                            value={editedPrice}
                            onChange={(e) => setEditedPrice(e.target.value)}
                        />
                    ) : (
                        product.price
                    )}
                    {editingIndex === index ? (
                        <>
                            <button onClick={handleSaveClick}>Zapisz</button>
                            <button onClick={handleCancelClick}>Anuluj</button>
                        </>
                    ) : (
                        <button onClick={() => handleEditClick(index)}>Edytuj</button>
                    )}
                </div>
            ))}
        </div>
        <button className="cartButton">
            EDIT
        </button>
    </div>);
}

export default ShopContentEdit;