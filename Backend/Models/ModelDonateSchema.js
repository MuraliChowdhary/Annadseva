const mongoose=require('mongoose');
const donateSchema=new mongoose.Schema({
    
})
const donateModel=mongoose.model('donate',donateSchema);
module.exports=donateModel;