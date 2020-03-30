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
import {useStyles} from "../style";
import Slide from "@material-ui/core/Slide";

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

        fetchProduct().then(sleeper(3000)).then((product) => {
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
                <Slide in={true} direction={'up'}>
                    <Card className={classes.infoCard}>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      Word of the Day
                    </Typography>
                    <Typography variant="h5" component="h2">

                    </Typography>
                    <Typography color="textSecondary">
                      adjective
                    </Typography>
                    <Typography variant="body2" component="p">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
                </Slide>
            )}
            </div>
        </Fragment>
    );
}

export default Product;
