import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Payment from '../components/Payment';
const Purchase = () => {
const items=[
    {
    item:'milk',
    qty:'1',
    price:'35'
},
{
    item:'Curd',
    qty:'2',
    price:'50'
},
{
    item:'Butter',
    qty:'2',
    price:'45'
},
]
var tot=0;
const [opt,setOpt]=useState(0);
const [address,setAddress]=useState([]);
const navigate=useNavigate();
    return (

        <div class="card mx-auto m-5" style={{width: "30rem"}}>
  <div class="card-body">
      <table width="100%">
        <tr style={{fontSize:'25px',textAlign:'center'}}>
            <th>Item</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
        </tr>
        {items.map((data,index) => {
            return(
            <tr key={index} style={{fontSize:'20px',textAlign:'center'}}>
                <td>{data.item}</td>
                <td>{data.qty}</td>
                <td>{data.price}</td>
                <td >{data.price*data.qty}</td>
               <p style={{display:'none'}}> {tot+=data.price*data.qty}</p>
            </tr>
            )  
        })}
        
        </table> 
        <br /> 
        <hr />
        <pre><h4 style={{textAlign:'center'}}>Grand Total   :   {tot}</h4></pre>
  <hr />
  <p class="h5">Add  your location for delivery
 <textarea cols="40" rows="3" onChange={(e)=>{setAddress(e.target.value)}}></textarea>
  </p> 
  <h4>Payment options  :  <select onChange={(e)=>{if(e.target.value==="UPI transaction"){setOpt(1)}else{setOpt(0)}}}>
   <option value="Cash on Delivery">Cash on Delivery</option>
    <option value="UPI transaction">UPI transaction</option>
  </select></h4>
  {opt === 1 ? <Payment tot={tot} /> : ''}
 
  <button onClick={() => {navigate('/Products')}}>Submit</button>
  </div>
  
</div>
    
  )
}

export default Purchase