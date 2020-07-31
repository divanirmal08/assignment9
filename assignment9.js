var express=require("express")
object=new express()
var port=4400
var mongo=require("mongodb")
var MongoClient=mongo.MongoClient
var mongourl="mongodb://localhost:27017"
var db
var col_name="res"

object.get("/",function(req,res){
    res.status(200).send("api is running")
})

object.get("/:city",function(req,res){
    db.collection(col_name).find({cityname:req.params.cityname}).toArray(function(err,result){
        if (err) throw err
        res.send(result)
    })
})

MongoClient.connect(mongourl,function(err,client){
    if(err) throw err
    db=client.db("edureka")
    object.listen(port,function(err){
        if (err) throw err
        console.log(`server us running on port ${port}`)
    })
})