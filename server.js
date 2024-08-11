import cors from 'cors';
import express from 'express';
import { connectToDB,db } from "./db.js";

const app = express()
app.use(cors())
app.use(express.json())



app.post('/signin', async(req, res) => {
    await db.collection("ast").findOne({Email:req.body.Email})
    .then((result)=>{
        
        
        if(result?.Password===req.body.Password){
            res.json({message:"login sucess",values:result})
        }
        else{
            res.json({error:"login failed"})
        }
     })
    .catch((e)=>console.log(e))
})
app.post('/signup', async (req, res) => {
    await db.collection('ast').findOne({ Email: req.body.Email })
    .then((result1) => {
        if (result1) {
            return res.json({ error: 'This email is already in use.' });
        } else {
           
            return db.collection('ast').insertOne({Email: req.body.Email,Password: req.body.Password, Name: req.body.Name,Branch: req.body.Branch,Section: req.body.Section,PhoneNumber: req.body.PhoneNumber});
        }
    })
    .then((result) => {
        res.json({ message: 'Registration successful!' });
    })
    .catch((e) => {
        console.error(e);
        res.json({ error: 'An error occurred during registration.' });
    });
});









app.post('/changepassword', async(req, res) => {
    console.log(req.body.NewPassword);
    console.log(req.body.CnfPassword);
    
    
    if(req.body.NewPassword===req.body.CnfPassword){
    await db.collection("ast").updateOne({Email:req.body.Email},{$set:{Password:req.body.NewPassword}})
    .then((result1) => {
        if (result1) {
            res.json({message: 'Password updated'})
        } else {
            return res.json({ error: 'This email is not in use.' });
        }
    })
    // .then((result)=>{
    //     res.json({message:'Password updated'})
    // })
    // .catch((e)=>console.log(e))
    // }
    // else{
    //     res.json({ error: 'Passwords do not match.' });
    }
})




// app.post('/students', async(req, res) => {
//     await db.collection("ast").find().toArray()
//     .then((result)=>{
//         res.json(result)
//      })
//     .catch((e)=>console.log(e))
// })

















// app.get('/', (req, res) => {
//     res.json("server is running successfully!");

// })
// app.post('/insert', async(req, res) => {
//     await db.collection("ast").insertOne({Name:req.body.Name,Age:req.body.age})
//     .then((result)=>{
//         res.json(result)
//     })
//     .catch((e)=>console.log(e))
// })
// app.post('/insertmany', async(req, res) => {
//     await db.collection("ast").insertMany(req.body)
//     .then((result)=>{
//         res.json(result)
//     })
//     .catch((e)=>console.log(e))
// })
// app.post('/update', async(req, res) => {
//     await db.collection("ast").updateOne({Name:req.body.Name="pavan"},[{$set:{hello:req.body.branch="hai"}},{$set:{regdno:"23B91A0511"}}])
//     .then((result)=>{
//         res.json(result)
//     })
//     .catch((e)=>console.log(e))
// })
// app.post('/signin', async(req, res) => {
//     await db.collection("ast").findOne({Name:req.body.name})
//     .then((result)=>{
//         console.log(result);
//         if(result?.City===req.body.password){
//             res.json({message:"login sucess",values:result})
//         }
//         else{
//             res.json({error:"login failed"})
//         }
//      })
//     .catch((e)=>console.log(e))
// })
// app.post('/updatemany', async(req, res) => {
//     await db.collection("ast").updateMany({Name:req.body.Name="satish"},[{$set:{hello:req.body.branch="hai",upsert:true}},{$set:{regdno:req.body.regdno="23B91A0511", upsert:true}}])
//     .then((result)=>{
//         res.json(result)
//     })
//     .catch((e)=>console.log(e))
// })
connectToDB(() => {
    app.listen(9000, () => {
        console.log("server running at 9000");
    })
})




















// import cors from 'cors';
// import express from 'express';
// import { connectToDB,db } from "./db.js";

// const app = express()
// app.use(cors())
// app.use(express.json())

// app.post('/',async(req,res)=>{
// await db.collection('ast').insertMany(req.body)
//     .then((result)=>{
//         res.json(result)
//     })
//     .catch((e)=>console.log(e))
// })

// // app.post('/1', async (req, res) => {
// //     await db.collection('ast').find({ Age: { $gte: 30 } }).toArray()
// //     .then((result) => {
// //         res.json(result);
// //     })
// //     .catch((e) => {
// //         res.json(e);
// //     });
// // });


// // app.post('/2',async(req,res)=>{
// //     await db.collection('ast').find({Name:{$in:['Ashok','pavan']}}).toArray()
// //     .then((result)=>{
// //         res.json(result)
// //     })
// //     .catch((e)=>res.json(e))
// // })
// // app.post('/3',async(req,res)=>{
// //     await db.collection('ast').find({Hobbies:'reading'}).toArray()
// //     .then((result)=>{
// //         res.json(result)
// //     })
// //     .catch((e)=>res.json(e))
// // })
// // app.post('/4',async(req,res)=>{
// //     await db.collection('ast').find({Salary:{$gt:60000}}).toArray()
// //     .then((result)=>{
// //         res.json(result)
// //     })
// //     .catch((e)=>res.json(e))
// // })
// // app.post('/5',async(req,res)=>{
// //     await db.collection('ast').find({City:{$in:['Newyork','Losangels']}}).toArray()
// //     .then((result)=>res.json(result))
// //     .catch((e)=>res.json(e))
// // })
// // app.post('/6',async(req,res)=>{
// //     await db.collection('ast').find({Hobbies:{$in:['reading','swimming']}}).toArray()
// //     .then((result)=>res.json(result))
// //     .catch((e)=>res.json(e))
// // })
// // app.post('/7',async(req,res)=>{
// //     await db.collection('ast').find({ Age: { $gt: 25, $lt: 35 } }).toArray()
// //     .then((result)=>res.json(result))
// //     .catch((e)=>res.json(e))
// // })
// // app.post('/8',async(req,res)=>{
// //     await db.collection('ast').find({ $and:[{Age:{$gte:30}},{City:'Srikakulam'}]}).toArray()
// //     .then((result)=>res.json(result))
// //     .catch((e)=>res.json(e))
// // })
// // app.post('/9', async (req, res) => {
// //     await db.collection('ast').find({ $and:[{Age:{$lt:30}},{Hobbies:"cooking"}]}).toArray()
// //     .then((result) => res.json(result))
// //     .catch((e) => res.json(e));
// // });

// // app.post('/10',async(req,res)=>{
// //     await db.collection('ast').find({Age:{$ne:30}}).toArray()
// //     .then((result)=>res.json(result))
// //     .catch((e)=>res.json(e))
// // })
// // app.post('/11',async(req,res)=>{
// //     await db.collection('ast').find({$and:[{City:{ $eq:'Srikakulam'}},{Hobbies:'reading'}] }).toArray()
// //     .then((result)=>res.json(result))
// //     .catch((e)=>res.json(e))
// // })
// // app.post('/12',async(req,res)=>{
// //     await db.collection('ast').find({$and:[{age:{$gte:25}},{$nor:[{city:'New York'},{city:'Los Angeles'}]}]}).toArray()
// //     .then((result)=>res.json(result))
// //     .catch((e)=>res.json(e))
// // })
// // app.post('/13',async(req,res)=>{
// //     await db.collection('ast').find().sort({ Salary: -1 }).limit(1).toArray()
// //     .then((result)=>res.json(result))
// //     .catch((e)=>res.json(e))
// // })
// // app.post('/14',async(req,res)=>{
// //     await db.collection('ast').find().sort({ Salary: -1 }).skip(1).limit(1).toArray()
// //     .then((result)=>res.json(result))
// //     .catch((e)=>res.json(e))
// // })
// // app.post('/15',async(req,res)=>{
// //     await db.collection('ast').updateMany({}, { $inc: { Salary: 5000 } })
// //     .then((result)=>res.json(result))
// //     .catch((e)=>res.json(e))
// // })
// // app.post('/16',async(req,res)=>{
// //     await db.collection('ast').updateMany({Age:{$gt:30}},{$inc:{Salary: 5000}})
// //     .then((result)=>res.json(result))
// //     .catch((e)=>res.json(e))
// // })


// // connectToDB(() => {
// //         app.listen(9000, () => {
// //             console.log("server running at 9000");
// //         })
// //     })

// // app.post('/findone', async(req, res) => {
// //     await db.collection('ast').findOne({Email:req.body.UserEmail,password:req.body.UserPassword})
// //     .then((result)=>{
// //         if(result==null){
// //             res.json("login failed....")
// //         }else{
// //             res.json("login success..")
// //         }
// //     })
// //     .catch((e)=>{
// //         res.json(e)
// //     })
// // })



