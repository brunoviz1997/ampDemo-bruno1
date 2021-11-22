import {useState, useEffect} from 'react';
import axios from 'axios';
import {Box, SimpleGrid} from '@chakra-ui/react';
import ProductCard from '../Components/ProductCard';
import {commerce} from '../App';

const Products = ({setCommerceCart, setCart, setCartVisible}) => {

    // const dummyData = {
    //     products: [
    //         {
    //             id: 1,
    //             category: 'Category1',
    //             name: 'Amoxicillin',
    //             price: 12.99
    //         },
    //         {
    //             id: 2,
    //             category: 'Category1',
    //             name: 'Alloetemines',
    //             price: 12.99
    //         },
    //         {
    //             id: 3,
    //             category: 'Category2',
    //             name: 'Stalaphratin',
    //             price: 12.99
    //         },
    //         {
    //             id: 4,
    //             category: 'Category1',
    //             name: 'Amoxicillin',
    //             price: 12.99
    //         },
    //         {
    //             id: 5,
    //             category: 'Category1',
    //             name: 'Alloetemines',
    //             price: 12.99
    //         },
    //         {
    //             id: 6,
    //             category: 'Category2',
    //             name: 'Stalaphratin',
    //             price: 12.99
    //         },
    //         {
    //             id: 7,
    //             category: 'Category1',
    //             name: 'Amoxicillin',
    //             price: 12.99
    //         },
    //         {
    //             id: 8,
    //             category: 'Category1',
    //             name: 'Alloetemines',
    //             price: 12.99
    //         },
    //         {
    //             id: 9,
    //             category: 'Category2',
    //             name: 'Stalaphratin',
    //             price: 12.99
    //         }
    //     ]
    // }

    const dummyData = [
        {
            id: 4,
            name: 'test',
            image: {
                url: 'https://i.etsystatic.com/22491816/r/il/c7c47e/3105726113/il_fullxfull.3105726113_cjoy.jpg'
            },
            description: '<h1>Description</h1>',
            price: {
                raw: 8.99
            }
        },
        {
            id: 5,
            name: 'test',
            image: {
                url: 'https://i.etsystatic.com/22491816/r/il/c7c47e/3105726113/il_fullxfull.3105726113_cjoy.jpg'
            },
            description: '<h1>Description</h1>',
            price: {
                raw: 8.99
            }
        },
        {
            id: 6,
            name: 'test',
            image: {
                url: 'https://i.etsystatic.com/22491816/r/il/c7c47e/3105726113/il_fullxfull.3105726113_cjoy.jpg'
            },
            description: '<h1>Description</h1>',
            price: {
                raw: 8.99
            }
        },
        {
            id: 7,
            name: 'test',
            image: {
                url: 'https://i.etsystatic.com/22491816/r/il/c7c47e/3105726113/il_fullxfull.3105726113_cjoy.jpg'
            },
            description: '<h1>Description</h1>',
            price: {
                raw: 8.99
            }
        },
        {
            id: 8,
            name: 'test',
            image: {
                url: 'https://i.etsystatic.com/22491816/r/il/c7c47e/3105726113/il_fullxfull.3105726113_cjoy.jpg'
            },
            description: '<h1>Description</h1>',
            price: {
                raw: 8.99
            }
        },
        {
            id: 9,
            name: 'test',
            image: {
                url: 'https://i.etsystatic.com/22491816/r/il/c7c47e/3105726113/il_fullxfull.3105726113_cjoy.jpg'
            },
            description: '<h1>Description</h1>',
            price: {
                raw: 8.99
            }
        },
    ]

    const [products, setProducts] = useState([]);

    useEffect(() => {
        commerce.products.list()
        .then(json => setProducts(json.data.concat(dummyData)));
    }, [])

    const addToCartHandler = (product) => {

        commerce.cart.add(product.id)
        .then(item => {
            console.log(item);
            setCommerceCart(item.cart);
        })
        .catch(err => console.log(err))
        // setCart(prev => {
        //     const tempCart = [...prev];
        //     setCartVisible(true);
        //     const findIndex = tempCart.findIndex(currProduct => currProduct.id === product.id);
        //     if (findIndex >= 0) {
        //         // Item already in cart
        //         const tempProduct = tempCart[findIndex];
        //         tempProduct.quantity += 1;
        //         return tempCart;
        //     } else {
        //         tempCart.push({...product, quantity: 1});
        //         return tempCart;
        //     }
            
        // })
    }

    return (
        <Box >
            <SimpleGrid className="products" autoRows="1fr" templateColumns="repeat(auto-fill, minmax(250px, 1fr))" spacing="2rem">
                {
                    products.map( product => <ProductCard key={product.id} product={product} addToCartHandler={addToCartHandler} />)
                }
            </SimpleGrid>
        </Box>
    )
}

export default Products;