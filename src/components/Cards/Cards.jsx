import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Card from '../Card/Card';
import { data } from 'autoprefixer';
import Footer from '../Footer/Footer';

const Cards = () => {
    const [cardsItem, setCardsItem]=useState([]);
    useEffect(()=>{
        fetch('./course.json')
        .then(res => res.json())
        .then (data=> setCardsItem(data.products))
    },[]);

    return (
        <div className='container mx-auto'>
            <Header></Header>
            <h1 className='mt-20 text-4xl text-sky-400 font-semibold'>ALL Products:{cardsItem.length}</h1>
           <Card cardsItem={cardsItem} ></Card>
           <div className='mt-24'>
            <Footer></Footer>
           </div>
             
        </div>
    );
};

export default Cards;