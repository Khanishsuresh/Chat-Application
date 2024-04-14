import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect("mongodb+srv://khanishrams2022csbs:H7V3KqNwwBSjRz4d@chat-app.rctsncl.mongodb.net/?retryWrites=true&w=majority&appName=chat-app");
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
