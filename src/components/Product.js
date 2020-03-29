import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from "react-router-dom";
import API from "../utils/API";
import CircularProgress from "@material-ui/core/CircularProgress";


function Product() {
    let {id} = useParams();
    let history = useHistory();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        history.replace(`/product/${id}`, {pageName: `Product ${id} Nickname`});
        async function fetchProduct() {
            await API.get(
            ).then(res => {
                const product = res.data;
                setProduct(product);
            });
        }
        fetchProduct().then(() => {history.replace(`/product/${id}`, {pageName: `Product ${product ? product.id : ''} Nickname`});});
    }, [id]);

    return (
        <div>
            This is a product id {id}.
            Dump of product:

            {product ? JSON.stringify(product) : <CircularProgress />}
        </div>
    );
}

export default Product;
