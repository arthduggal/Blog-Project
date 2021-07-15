import mongoose from 'mongoose';


const Connection = async() => {
    try{
        const URL = 'mongodb://BlogWebApp:Welcome@blog-shard-00-00.f9i6m.mongodb.net:27017,blog-shard-00-01.f9i6m.mongodb.net:27017,blog-shard-00-02.f9i6m.mongodb.net:27017/Blog?ssl=true&replicaSet=atlas-wp0p9t-shard-0&authSource=admin&retryWrites=true&w=majority';
        await mongoose.connect(URL,{useNewUrlParser: true,useUnifiedTopology:true,useFindAndModify:false});
        console.log('DB connected successfully !!');
    }
    catch(err){
        console.log('Error while connecting to Mongodb'+err);
    }
}


export default Connection;