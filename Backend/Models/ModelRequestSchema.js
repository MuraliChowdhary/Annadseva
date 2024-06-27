const mongoose=require('mongoose');
const requestSchema=new mongoose.Schema({
    
})
const requestModel=mongoose.model('request',requestSchema);
module.exports=requestModel;