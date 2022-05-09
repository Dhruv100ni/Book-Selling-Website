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
import Category from './Category';

const Cards = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [Category, setCategory] = useState("all");
    let componentMounted = true;

    useEffect(() => {

        console.log('Data: ', bookdata);
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=SUu9Yx0vx40PgSoBA2TLBmpCf3LYVVwl');
            if (componentMounted) {
                console.log('Component mounted');
                const data = await response.json();
                console.log('Data: ', data);
                setData(data.results.books);
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
                <button className='btn_cat btn-outline-dark mr-2' onClick={
                    () => {
                        setCategory("all");
                    }
                }>
                    All
                </button>
                <button className='btn_cat btn-outline-dark' onClick={
                    () => {
                        setCategory("trending");
                    }
                }>
                    Trending
                </button>
                <button className='btn_cat btn-outline-dark' onClick={
                    () => {
                        setCategory("best_seller");
                    }
                }>
                    Best Seller
                </button>
            </div>

        )

    }

    const ShowCards = () => {
        return (
                    <div className='card_container'>
                        {
                            data.map(item => (
                                
                                <Card sx={{ maxWidth: 345 }} >
                                {console.log(item)}
                                    
                                    <CardContent>
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        style={{marginBottom: '10px'}}
                                        image={item.book_image}
                                    />
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.price}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.author}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.publisher}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Buy</Button>
                                        <Button size="small">Details</Button>
                                    </CardActions>
                                </Card>
                            ))
                        }
                        
        
                    </div>
                );
    }


    // const ShowCards = () => {
    //     if (Category === "all") {

    //     return (
    //         <div className='card_container'>
            
    //             {
    //                 bookdata.map(item => (
                        
    //                     <Card sx={{ maxWidth: 345 }} >
    //                     {console.log(item)}
                            
    //                         <CardContent>
    //                         <CardMedia
    //                             component="img"
    //                             alt="green iguana"
    //                             height="140"
    //                             style={{marginBottom: '10px'}}
    //                             image={item.image_desc}
    //                         />
    //                             <Typography gutterBottom variant="h5" component="div">
    //                                 {item.title}
    //                             </Typography>
    //                             <Typography variant="body2" color="text.secondary">
    //                                 {item.cost}
    //                             </Typography>
    //                             <Typography variant="body2" color="text.secondary">
    //                                 {item.writer}
    //                             </Typography>
    //                             <Typography variant="body2" color="text.secondary">
    //                                 {item.publisher}
    //                             </Typography>
    //                             <Typography variant="body2" color="text.secondary">
    //                                 {item.detail}
    //                             </Typography>
    //                         </CardContent>
    //                         <CardActions>
    //                             <Button size="small">Buy</Button>
    //                             <Button size="small">Details</Button>
    //                         </CardActions>
    //                     </Card>
    //                 ))
    //             }
                

    //         </div>
    //     ); }
    //     else if (Category === "trending") {
    //         return (
    //             <div className='card_container'>
                
    //                 {
    //                     bookdata.map(item => (
                            
    //                         item.category === "trending" && (
    //                         <Card sx={{ maxWidth: 345 }} >
    //                         {console.log(item)}
                                
    //                             <CardContent>
    //                             <CardMedia
    //                                 component="img"
    //                                 alt="green iguana"
    //                                 height="140"
    //                                 style={{marginBottom: '10px'}}
    //                                 image={item.image_desc}
    //                             />
    //                                 <Typography gutterBottom variant="h5" component="div">
    //                                     {item.title}
    //                                 </Typography>
    //                                 <Typography variant="body2" color="text.secondary">
    //                                     {item.cost}
    //                                 </Typography>
    //                                 <Typography variant="body2" color="text.secondary">
    //                                     {item.writer}
    //                                 </Typography>
    //                                 <Typography variant="body2" color="text.secondary">
    //                                     {item.publisher}
    //                                 </Typography>
    //                                 <Typography variant="body2" color="text.secondary">
    //                                     {item.detail}
    //                                 </Typography>
    //                             </CardContent>
    //                             <CardActions>
    //                                 <Button size="small">Buy</Button>
    //                                 <Button size="small">Details</Button>
    //                             </CardActions>
    //                         </Card>
    //                     )
    //                     ))
    //                 }
                    
    
    //             </div>
    //         ); }
    //         else if (Category === "best_seller") {
    //             return (
    //                 <div className='card_container'>
                    
    //                     {
    //                         bookdata.map(item => (
                                
    //                             item.category === "best_seller" && (
    //                             <Card sx={{ maxWidth: 345 }} >
    //                             {console.log(item)}
                                    
    //                                 <CardContent>
    //                                 <CardMedia
    //                                     component="img"
    //                                     alt="green iguana"
    //                                     height="140"
    //                                     style={{marginBottom: '10px'}}
    //                                     image={item.image_desc}
    //                                 />
    //                                     <Typography gutterBottom variant="h5" component="div">
    //                                         {item.title}
    //                                     </Typography>
    //                                     <Typography variant="body2" color="text.secondary">
    //                                         {item.cost}
    //                                     </Typography>
    //                                     <Typography variant="body2" color="text.secondary">
    //                                         {item.writer}
    //                                     </Typography>
    //                                     <Typography variant="body2" color="text.secondary">
    //                                         {item.publisher}
    //                                     </Typography>
    //                                     <Typography variant="body2" color="text.secondary">
    //                                         {item.detail}
    //                                     </Typography>
    //                                 </CardContent>
    //                                 <CardActions>
    //                                     <Button size="small">Buy</Button>
    //                                     <Button size="small">Details</Button>
    //                                 </CardActions>
    //                             </Card>
    //                         )
    //                         ))
    //                     }
                        
        
    //                 </div>
    //             ); }

    // }

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
        <div className='cards_div'>
            <div className="container my-5 py-5" style={{ paddingBottom: "10px" }}>
                <div className="heading_div">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center' style={{fontFamily: "Oleo Script Swash Caps"}}>Latest Books</h1>
                        <hr className='heading_hr'/>
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