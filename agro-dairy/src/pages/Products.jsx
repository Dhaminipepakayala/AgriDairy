import React from 'react'
import Productsdata from '../Productsdata';
const Products = ({callBack}) => {
  
  
  const addCart = (id) =>{
    callBack(id);
  }
  return (
    < div  className="row">
    {Productsdata.map((data,index) => { 
    return (
    <div key={index} className="card col-md-4 mx-auto m-3" style={{width: "18rem"}}>   
    <img style={{objectFit:'fill'}} alt="img" src={data.img} height="200" width="260" />
    <div className="card-body">
      <h3 className="card-title" id="1">{data.item}</h3>
      <h4>50rs/-</h4>
      <button onClick={() => addCart(data.id)} className="btn btn-success w-100">Add to cart</button>
      <button className="btn btn-success w-100">Buy Now</button>
    </div>   
    </div>
     )
      })}
    
  
    </div>

  )
}

export default Products;