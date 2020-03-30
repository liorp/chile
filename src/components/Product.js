import React, {Fragment, useEffect, useState} from 'react';
import {useParams, useHistory} from "react-router-dom";
import {fetchResource} from "../utils/API";
import ChileError from "./ChileError";
import ChileLoading from "./ChileLoading";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {useStyles} from "../styles/product";
import Grow from "@material-ui/core/Grow";

function sleeper(ms) {
    return function (x) {
        return new Promise(resolve => setTimeout(() => resolve(x), ms));
    };
}

function Product() {
    const classes = useStyles();

    let {id} = useParams();
    let history = useHistory();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        history.replace(`/product/${id}`, {pageName: `Product ${id} Nickname`});

        async function fetchProduct() {
            setLoading(true);
            try {
                return await fetchResource('posts', 1);
            } finally {

            }
        }

        fetchProduct().then(sleeper(2000)).then((product) => {
            setProduct(product);
            history.replace(`/product/${id}`, {pageName: `Product ${product ? product.id : ''} Nickname`});
            setLoading(false);
        }).catch((e) => {
            setError(e);
        });
    }, [id, history]);

    return (
        <Fragment>
            <div style={{display: 'flex', height: '100%', justifyContent: 'center'}}>
                {error && (
                    <ChileError error={error}/>
                )}

                {loading && (
                    <ChileLoading indeterminate={true} resourceName={'product'}/>
                )}

                {(!error && !loading) && (
                    <Grow in={true} direction={'up'}>
                        <Card className={classes.infoCard}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    {product.title}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {product.body}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Add Another Product</Button>
                            </CardActions>
                        </Card>
                    </Grow>
                )}
            </div>
        </Fragment>
    );
}

export default Product;
