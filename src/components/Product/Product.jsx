import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import useStyles from './style';
import ChileLoading from '../ChileLoading/ChileLoading';
import ChileError from '../ChileError';
import api from '../../utils';

function sleeper(ms) {
  return function sleeping(x) {
    return new Promise((resolve) => setTimeout(() => resolve(x), ms));
  };
}

function Product() {
  const classes = useStyles();

  const { id } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    history.replace(`/product/${id}`, { pageName: `Product ${id} Nickname` });

    async function fetchProduct() {
      setLoading(true);
      return api.fetchResource('posts', 1);
    }

    fetchProduct().then(sleeper(2000)).then((result) => {
      setProduct(result);
      history.replace(`/product/${id}`,
        { pageName: `Product ${result ? result.id : ''} Nickname` });
      setLoading(false);
    }).catch((e) => {
      setError(e);
    });
  }, [id, history]);

  return (
    <>
      <div style={{ display: 'flex', height: '100%', justifyContent: 'center' }}>
        {error && (
          <ChileError error={error} />
        )}

        {loading && (
          <ChileLoading indeterminate resourceName="product" />
        )}

        {(!error && !loading) && (
          <Grow in direction="up" addEndListener={() => {}}>
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
    </>
  );
}

export default Product;
