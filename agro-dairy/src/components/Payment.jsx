import React from 'react'

const  Payment = ({tot}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if(tot === ""){
        alert("please enter amount");
        }else{
          var options = {
            key: "rzp_test_27Zk7a0toRsqkQ",
            key_secret:"SKtmfVPEIzTWMvMxteAilZA8",
            amount: tot *100,
            currency:"INR",
            name:"AgriDairy",
            description:"",
            handler: function(response){
              alert(response.razorpay_payment_id);
            },
            prefill: {
              name:"AgroDairy",
              email:"Agrodairy@gmail.com",
              contact:""
            },
            notes:{
              address:"Razorpay Corporate office"
            },
            theme: {
              color:"#3399cc"
            }
          };
          var pay = new window.Razorpay(options);
          pay.open();
        }
      
    }
  return (
    <div>
    <input type="text" defaultValue={tot} />
    <br/><br/>
    <button onClick={handleSubmit}>submit</button></div>
  )
}

export default Payment;