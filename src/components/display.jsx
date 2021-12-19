import React from 'react';
import { connect } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { addToCart } from '../store2/actions';
const Display = props => {
    return (
        <React.Fragment >
            <div className='display'>

                {props.products.map(value => {
                    return (
                        <div>

                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={value.img}
                                        alt={`${value.product}`}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {value.product}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                    <Button size="small" color="primary" onClick={() => props.addToCart(value.product)}>
                                        Add to Cart
                                    </Button>
                                </CardActions>
                            </Card>

                        </div>)
                })}


            </div>
        </React.Fragment>
    )
}
const mapStateToProps = state => ({
    products: state.category.productsShown
})
const mapDispatchToProps = { addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(Display);



