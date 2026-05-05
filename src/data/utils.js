import Fuse from "fuse.js"
import { vegetables } from "./products.js"

// TODO: vegetables borde använda Redux store i stället - flytta till lämplig komponent
const fuse = new Fuse(vegetables, {
	// vilka egenskaper ska man kunna söka på?
	// { id, name, price, blurb, description }
	keys: ['name', 'blurb'],
	includeScore: true
})

// Returnerar lista med matchande objekt
const fuzzyMatch = needle => {
	const results = fuse.search(needle)
	// varje sökträff innehåller: { item, refIndex }
	// vi vill bara behålla lista med item-objekt
	console.log('Fuzzy search: ', results)
	return results.map(result => result.item)
}


// Används av Products.jsx
// Vi flyttar ut den för att komponenten ska bli mindre
const match = (needle, haystack) => {
	// returnerar true om texten matchar
	return haystack.toLowerCase().includes( needle.toLowerCase() )
}

export { match, fuzzyMatch }
