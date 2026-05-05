import { useParams, useLoaderData, useNavigate, Link } from "react-router"
import { useSelector } from "react-redux"

const Details = () => {
	// Används för att backa när användaren klickar på länken "tillbaka"
	const navigate = useNavigate()

	// Eftersom det står path: '/products/:id' i routes.jsx,
	// betraktas "id" som en URL-parameter
	// och vi kan hämta den med useParams
	// Men se upp!! Alla URL params är alltid STRÄNGAR
	const { id } = useParams()

	// Alt 1: använd loader
	// const vegetables = useLoaderData()
	// Alternativ 2: lägg vegetables i en store (Zustand) och hämta den därifrån
	const vegetables = useSelector(state => state.vegetables)

	// Leta upp produkten vi ska visa. Om länken är felaktig, kanske det inte finns någon produkt som matchar. item kan vara UNDEFINED
	const item = vegetables.find(v => v.id === Number(id))
	if( !item ) {
		console.log('Hittade inte produkten. ', id, vegetables)
		// console.log('id har datatypen: ', typeof id)
		// console.log('id2: ', vegetables[2].id)
		return <div className="details"> Kunde inte visa produkten. </div>
	}

	const goBack = event => {
		event.preventDefault()
		navigate(-1)
	}

	return (
		<div className="details">
			<h3> {item.name} </h3>
			<p> {item.price} kr </p>
			<p> {item.blurb} </p>
			<p> {item.description} </p>
			<p> <a href="/products" onClick={goBack}> Tillbaka till produkterna </a> </p>

		</div>
	)
}

export default Details
