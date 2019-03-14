const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/Todo',(err,client)=>{

const db = client.db('Todo')
if(err){
	return console.log('MongoDB is not connected');
}
console.log('mongodb is connected');

const Todocollection=db.collection('Todos');

//deleteMany
//Todocollection.deleteMany({text:'test2'}).then((res)=>{
	//console.log(res);
//})

//deleteOne
Todocollection.deleteOne({text:'test1'}).then((res)=>{
	console.log(res);
})

//findOneAndDelete
Todocollection.findOneAndDelete({complete:false}).then((res)=>{
	console.log(res);
})
//client.close();	
})