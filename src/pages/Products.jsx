import { useState, useMemo } from 'react'
import { useLoaderData } from 'react-router'
import './Products.css'
import ProductItem from '../components/ProductItem'
import { fuzzyMatch } from '../data/utils.js'
// TODO: hämta data från Redux

const Products = () => {
	const vegetables = ???
	const [searchText, setSearchText] = useState('')

	// Enkel sökning
	// const calculateValue = () => searchText === '' ? vegetables : vegetables.filter(v => match(searchText, v.name))
	const calculateValue  =() => searchText === '' ? vegetables : fuzzyMatch(searchText)

	const matchingVeggies = useMemo(
		calculateValue,
		[searchText, vegetables]
	)




	return (
		<div className="products">
			<h2> Vårt sortiment </h2>

			<div className="search">
				<input type="text"
					value={searchText}
					onChange={event => setSearchText(event.target.value)}
					/>
				🔍
			</div>

			<div className="product-list">
			{matchingVeggies.map(v => (
				<ProductItem key={v.id} vegetable={v} />
			))}
			</div>
		</div>
	)
}

export default Products
