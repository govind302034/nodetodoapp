const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Todo',(err,client)=>{

const db = client.db('Todo')
if(err){
	return console.log('MongoDB is not connected');
}
console.log('mongodb is connected');

const Todocollection=db.collection('Todos');
const Usercollection=db.collection('User');

Todocollection.insertOne({
	text:'test2',
	complete:true
},(err,res)=>{
	if(err){
		return console.log('unable to store todo'.err);
	}
	console.log(JSON.stringify(res.ops,undefined,2));
});

Usercollection.insertOne({
	name:'govind',
	age:23,
	location:'jaipur'
},(err,res)=>{
	if(err){
		return console.log('unable to make user',err)
	}
	console.log(JSON.stringify(res.ops,undefined,2));
})


client.close();	
})