import mongoose from 'mongoose'

const connectDB = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGO_URI!, {
			dbName: 'criminal-minds-quotes', // name of the database, change it if you want.
		})
		const url = `${connection.connection.host}:${connection.connection.port}`
		console.log(`MongoDB connected at: ${url}`)
	} catch (error) {
		console.log(error as Error)
		process.exit(1)
	}
}

export default connectDB
