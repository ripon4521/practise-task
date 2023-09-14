import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { data } from 'autoprefixer';

const Card = () => {
    const [cardsItem, setCardsItem]=useState([]);
    useEffect(()=>{
        fetch('./course.json')
        .then(res => res.json())
        .then (data=> setCardsItem(data.products))
    },[]);

    return (
        <div className='container mx-auto'>
            <Header></Header>
          
              <div className='mt-24 grid gap-10 grid-cols-4'>
              {
                    cardsItem.map(card => 
                        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
                        )
                }
          
              </div>
            
        </div>
    );
};

export default Card;