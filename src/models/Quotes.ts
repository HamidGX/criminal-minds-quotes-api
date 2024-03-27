import mongoose, { Schema, Document } from 'mongoose'

interface IQuote extends Document {
	Character: string
	Quote: string
}

const QuoteSchema: Schema = new Schema({
	Character: { type: String, required: true },
	Quote: { type: String, required: true },
})

interface IEpisode extends Document {
	Season: number
	Episode: number
	Title: string
	Quotes: IQuote[]
}

const EpisodeSchema: Schema = new Schema({
	Season: { type: Number, required: true },
	Episode: { type: Number, required: true },
	Title: { type: String, required: true },
	Quotes: [QuoteSchema], // Embedding the QuoteSchema
})

const Quote = mongoose.model<IEpisode>('Episode', EpisodeSchema)

export default Quote
