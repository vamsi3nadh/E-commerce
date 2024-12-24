import {v2 as cloudinary} from 'cloudinary'
import productModel from "../models/productModel.js"

// Function for add product



const addProduct = async (req,res) => {
    try {
        const {name,description,price,category,subCategory,sizes,bestseller} = req.body;
        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image1[0]
        const image3 = req.files.image3 && req.files.image1[0]
        const image4 = req.files.image4 && req.files.image1[0]
        const sizesArray = sizes ? JSON.parse(sizes) : [];

        const images = [image1,image2,image3,image4].filter((item) => item !== undefined)

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path,{resourse_type:'image'});
                return result.secure_url
            })
        )
        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestseller:bestseller ==='true' ? true : false ,
            sizes: sizesArray,
            image:imagesUrl,
            date:Date.now()

        }
        console.log(productData);

        const product = new productModel(productData)
        await product.save()

        // console.log(name,description,price,category,subCategory,sizes,bestseller)
        // console.log(imagesUrl);
        res.json({success:true,message:"Producted Added"}) 
        

    } catch (error) {
        res.json({success:false,message:error.message})
        console.log(error);
        
    }
    
}


// function for list product
const listProducts = async (req,res) => {
    try {
        const products = await productModel.find({})
        res.json({success:true,products})      
    } catch (error) {
        res.json({success:false,message:error.message})
        console.log(error);        
    }

}

// function remove product

const removeProduct = async (req,res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:'Product Removed'})
        
    } catch (error) {
        res.json({success:false,message:error.message})
        console.log(error);  
        
    }

}

// function for single product info 
const singleProduct = async (req,res) => {
    try {
        const {productId} = req.body
        const product = await productModel.findById(productId)
        res.json({success:true,product})
        
    } catch (error) {
        res.json({success:false,message:error.message})
        console.log(error);  
        
    }

}

export {addProduct,listProducts,removeProduct,singleProduct};