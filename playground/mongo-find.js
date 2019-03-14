const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Todo',(err,client)=>{

const db = client.db('Todo')
if(err){
	return console.log('MongoDB is not connected');
}
console.log('mongodb is connected');

const Todocollection=db.collection('Todos');

/*Todocollection.find({complete:false}).toArray().then((docs)=>{
	console.log('Todos');
	console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
	console.log('unable to find data',err);
})*/


const Usercollection=db.collection('User');

Usercollection.find().count().then((count)=>{
	console.log(`Total todos: ${count}`);
},(err)=>{
	console.log("can't find",err);
})
client.close();	
})