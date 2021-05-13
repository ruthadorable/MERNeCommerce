var mongoose =require ('mongoose')

const reviewSchema=mongoose.Schema({
    name: {type : String, required: true},
    rating: {type: Number,required : true},
    comment:{type:String , required: true}
},{
    timestamps: true,
})
const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required : true,
        ref :'User'
    },
    name: {
        type: String,
        required : true,
        unique:true,
    },
    image: {
        type: String,
        required : true,
    },
    category: {
        type: String,
        required : true
    },
    description: {
        type: String,
        required : true,
        default: false,
    },
    price: {
        type: Number,
        required : true,
    },
    rating: {
        type: Number,
        required : true,
    },
    numReviews:{
        type: Number,
        required : true,
        default:0,
    },
    reviews:[reviewSchema],
},{
    timestamps: true
})
const Product=mongoose.model('Product',productSchema)
module.exports=Product

