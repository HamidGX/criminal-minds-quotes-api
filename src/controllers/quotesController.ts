import { Request, Response } from 'express'
import Quote from '../models/Quotes' // Asumiendo que tienes un modelo de Quote definido
import mongoose from 'mongoose'

// Controller to get a random quote
export const getRandomQuote = async (_req: Request, res: Response) => {
	try {
		const randomQuote = await Quote.aggregate([{ $sample: { size: 1 } }])
		res.json(randomQuote)
	} catch (error) {
		if (error instanceof Error) {
			res.status(500).json({ message: error.message })
		}
	}
}

// Controller to get a quote by ID
export const getQuoteById = async (req: Request, res: Response) => {
	const { id } = req.params

	// check if the ID is a valid MongoDB ID
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).json({ message: 'Invalid quote ID' })
	}

	try {
		const quote = await Quote.findById(id)
		if (!quote) {
			return res.status(404).json({ message: 'Quote not found' })
		}
		return res.json(quote)
	} catch (error) {
		if (error instanceof Error) {
			return res.status(500).json({ message: error.message })
		} else {
			return res.status(500).json({ message: 'Error retrieving quote' })
		}
	}
}

// Controller to search quotes by keyword
export const searchQuoteByKeyword = async (req: Request, res: Response) => {
	try {
		const keyword = req.query.keyword
		if (!keyword || typeof keyword !== 'string') {
			return res.status(400).json({ message: 'Missing or invalid keyword' })
		}

		const quotes = await Quote.find({
			'Quotes.Quote': { $regex: keyword, $options: 'i' },
		})

		if (quotes.length === 0) {
			return res
				.status(404)
				.json({ message: 'No quotes found for the given keyword' })
		}

		return res.json(quotes)
	} catch (error) {
		console.error('Error searching quotes:', error)
		return res.status(500).json({ message: 'Internal server error' })
	}
}

// Controller to get all quotes
export const getAllQuotes = async (_req: Request, res: Response) => {
	try {
		const quotes = await Quote.find()
		res.json(quotes)
	} catch (error) {
		if (error instanceof Error) {
			res.status(500).json({ message: error.message })
		}
	}
}
