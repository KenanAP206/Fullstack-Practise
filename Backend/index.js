const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const cors=require("cors")
const dotenv=require("dotenv")
let mongoose=require("mongoose")

app.use(bodyParser.json())
app.use(cors())
dotenv.config()


app.get("/",(req,res)=>{
     res.send("Server Oyaq")   
})


let ProductSchema = new mongoose.Schema({
    name:{ type: String, required: true },
    description:{ type: String},
    country:{ type: String},
    groupNumber:{ type: Number},
    image:{ type: String}
})

let ProductModel= mongoose.model("products",ProductSchema)



app.get("/products", async (req,res)=>{
    let products= await ProductModel.find()
    res.send(products)
})

app.get("/products/:id",async (req,res)=>{
    let id=req.params.id
    let myproduct= await ProductModel.findById(id)
    res.send({
        message:"successful GetById",
        data:myproduct
    })
})


app.delete("/products/:id", async  (req,res)=>{
    let {id}=req.params
   await ProductModel.findByIdAndDelete(id)
   res.send({
    message:"successfulful Delete",
})
})

app.post("/products", async (req,res)=>{
    let newProduct= ProductModel(req.body)
   await newProduct.save()
   res.send({
     message:"successful Post",
     data:req.body
   })
})


mongoose.connect(process.env.ConnectionString)
.then(()=>{
    console.log("connected")
})

app.listen(3000,()=>{
    console.log("Bu db 3000 portundadir ")
})
