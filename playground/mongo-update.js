const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Todo',(err,client)=>{

const db = client.db('Todo')
if(err){
	return console.log('MongoDB is not connected');
}
console.log('mongodb is connected');

const Usercollection=db.collection('User');

Usercollection.findOneAndUpdate({name:'mayank'},
{
$set:{name:'flash'},
$inc:{age:1}	
},{returnOriginal:true}
).then((res)=>{
	console.log(res);
})

//client.close();	
})