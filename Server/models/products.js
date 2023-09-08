import { Schema,model } from "mongoose";

const productSchema = new Schema({
    item: {
        type:String,
        required:true
    },
    price: {
        type:String,
        required:true
        
    },
    description: {
        type:String,
    },
    img:
    {
        data: Buffer,
        contentType: String
    }
    
    
    
});

export default model('items',productSchema);
