import React from 'react'
import Productsdata from '../Productsdata';
import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
const Cart = ({props}) => {
const [qty,setQty] = useState([]);
const navigate=useNavigate();
const handleBuy = () => {
  navigate('/Purchase',{
    
  });
}
  return (
    <div className="row">
      {Productsdata.map((data,index) => {
        if(props.indexOf(data.id)>=0){
        return(
          <div className="card mb-3 mx-auto m-3" style={{width:"36rem" , height:"13rem"}} >
  <div key={index} className="row g-0">
    <div className="col-md-4">
    <img  alt="img" src={data.img} height="200"  width="200" />
</div>

    
    <div className="col-md-8">
      <div className="card-body">
        <h3 className="card-title">{data.item}</h3>

      Qty: <input type="text" value={qty[index]} list="qty" onChange={(e) => {setQty([...qty,e.target.value])}} />
<datalist id="qty">
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>

</datalist>
 <h3>Total:{qty[index]*data.price}</h3>
      </div>
    </div>
  </div>
</div>
          
        )
        }
        return null;
      })}
      <button onClick={handleBuy}>Proceed to buy</button>
    </div>
  )
}

export default Cart