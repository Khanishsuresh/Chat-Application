import mongoose from "mongoose";

const connectToMongoDB = async () => {
	await mongoose.connect(process.env.MONGODB_URI);
	console.log("database connected")
};

export default connectToMongoDB;

// export default async function connectToDatabase(){
   
// }
