import React, { useState, useEffect } from 'react'
import CardsItem from './CardItem'
import './Cards.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import bookdata from './Data.json'

const Cards = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {

        console.log('Data: ', bookdata);
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('');
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter);
            }

            return () => {
                componentMounted = false;

            }
        }

        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    }

    const ShowProducts = () => {

        return (

            <div className='buttons'>
                <button className='btn btn-outline-dark mr-2'>
                    All
                </button>
                <button className='btn btn-outline-dark'>
                    Trending
                </button>
                <button className='btn btn-outline-dark'>
                    Best Seller
                </button>
            </div>

        )

    }

    const ShowCards = () => {
        return (
            <>
            
                {
                    bookdata.map(item => (
                        
                        <Card sx={{ maxWidth: 345 }} >
                        {console.log(item)}
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.cost}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.writer}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.publisher}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.detail}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Buy</Button>
                                <Button size="small">Details</Button>
                            </CardActions>
                        </Card>
                    ))
                }

            </>
        );

    }

    // const ShowCards = () => {
    //     bookdata.map(
    //         item => {
    //             console.log(item)
    //         }

    //     )
    //     return (
    //             <p>Hello</p>
    //     )
    // }
    return (
        <div>
            <div className="container my-5 py-5" style={{ paddingBottom: "10px" }}>
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest Books</h1>
                        <hr />
                    </div>
                </div>

                <div className='row justify-content-center'>
                    <ShowProducts />
                </div>

                <div>
                    <ShowCards />
                </div>
            </div>
        </div>
    )
}

export default Cards