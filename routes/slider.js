const Slider = require("../models/Slider");
const {verifyToken, verifyTokenAndAuthorization } = require("../verifyToken");

const router = require("express").Router();

// //CREATE PRODUCT

router.post("/",verifyToken, async (req,res)=>{
    const newSlider = new Slider(req.body);
    try {
        const savedSlider = await newSlider.save();
        res.status(200).json(savedSlider);
    } catch (err) {
        res.status(500).json(err);
    }
})


// //GET 
// router.get("/find/:id", async(req,res)=>{
//     try {
//         const product = await Product.findById(req.params.id);
//         res.status(200).json(product); 
//     } catch (err) {
//         res.status(500).json(err);
//     }
// } )


// GET ALL PRODUCTS
router.get("/", async(req,res)=>{
    try {
         const res = await Slider.find();
                res.status(200).json(res); 

    } catch (err) {
        res.status(500).json(err);
    }
} )


// //UPDATE
// router.put("/:id",verifyTokenAndAuthorization,async (req,res)=>{
//     if(req.body.password){
//         password = CryptoJS.AES.encrypt(
//             req.body.password,
//             process.env.SECRET_KEY
//             ).toString();
//     }
//     try {
//         const updatedProduct = await Product.findByIdAndUpdate(
//             req.params.id,
//             {
//             $set: req.body,
//             },
//             {new:true}
//         );
//         res.status(200).json(updatedProduct);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


// //DELETE

// router.delete("/:id",verifyTokenAndAuthorization, async(req,res)=>{
//     try {
//         await Product.findByIdAndDelete(req.params.id)
//         res.status(200).json("Product has been deleted!"); 
//     } catch (err) {
//         res.status(500).json(err);
//     }
// } )


module.exports = router;