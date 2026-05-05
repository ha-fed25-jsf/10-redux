import { Link } from "react-router"
import { deleteVegetable } from '../data/features/vegetableSlice.js'
import { useDispatch } from "react-redux"

const ProductItem = ({ vegetable }) => {
	const dispatch = useDispatch()
	return (
		<div className="product-item card">
			<p>{vegetable.name}</p>
			<p>{vegetable.price} kr</p>
			<p> {vegetable.blurb} </p>
			<Link to={'/products/' + vegetable.id}> Läs mer... </Link>
			<button onClick={() => dispatch(deleteVegetable(vegetable.id))}> Ta bort </button>
		</div>
	)
	// dispatch( { type: 'deleteVegetable', payload: 15 } )
}

export default ProductItem
