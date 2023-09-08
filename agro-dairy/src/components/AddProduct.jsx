import React,{useState} from 'react'
import axios from 'axios';

const AddProduct = () => {
const [details,setDetails]=useState('');
const handleChange = (e) => {
setDetails((pre)=> {return{...pre,[e.target.name]:e.target.value}} );
}
const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/data/',details,
    {
      headers:{"Content-Type":"multipart/form-data"}
    }
    )
    
    

}

  return (
    <div>
        <form>
            <input type="text" name="title" id="title" onChange={handleChange} placeholder="enter Product Title" /><br />
            <input type="text" name="price" id="price" onChange={handleChange} placeholder="set Price" /><br />
            <textarea rows="3" cols="50" name="description" onChange={handleChange} placeholder="add Description"></textarea><br />
            <input type="file" name="Upload" 
             onChange={(e)=>{setDetails((pre)=> {return{...pre,[e.target.name]:e.target.files[0].name}})} }
             id="upload" placeholder="upload Product image" /><br />
            <input type="submit" value="Save" onClick={handleSubmit} />
        </form>
        
    </div>
  )
}

export default AddProduct