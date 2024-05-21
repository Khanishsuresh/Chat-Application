import mongoose from "mongoose";

const connectToMongoDB = async () => {
<<<<<<< HEAD
	await mongoose.connect(process.env.MONGODB_URI);
	console.log("database connected")
=======
	try {
		await mongoose.connect("mongodb+srv://khanishrams2022csbs:H7V3KqNwwBSjRz4d@chat-app.rctsncl.mongodb.net/?retryWrites=true&w=majority&appName=chat-app");
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
>>>>>>> 7ec5de53b1bf0eb7aff0f38d4f2ccd17cc0fd22d
};

export default connectToMongoDB;

// export default async function connectToDatabase(){
   
// }
