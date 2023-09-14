const Card = ({cardsItem}) => {
    // const{product_title,img,desc,price} = cardsItem;
    
    return (
        <div>
             <div className='mt-24 grid gap-10 grid-cols-4'>
              {
                    cardsItem.map(x => 
                        <div className="card w-[350px] bg-base-100 shadow-xl">
  <figure className="">
    <img src={x.img}  className="rounded-xl w-[200px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{x.product_title}</h2>
    <p>{x.desc}</p>
    <div className="card-actions items-center">
      <button className="btn btn-primary">Buy Now</button>
      <h1 className="text-2xl ml-5">Price:{x.price}$</h1>
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