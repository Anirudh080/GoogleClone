import mongoose from 'mongoose'

const Connection=async (username='name',password='passwd')=>{
    const URL=`mongodb+srv://name:passwd@cluster0.thk2zgt.mongodb.net/databasename?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (err) {   
        console.log(err);
    }
}
export default Connection;
