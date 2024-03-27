import express from 'express'
const router = express.Router()

import {
	getRandomQuote,
	getQuoteById,
	searchQuoteByKeyword,
	getAllQuotes,
} from '../controllers/quotesController'

router.get('/', getAllQuotes)
router.get('/random', getRandomQuote)
router.get('/search', searchQuoteByKeyword)
router.get('/id/:id', getQuoteById)

export default router
