import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router'
import './index.css'
import { routes } from './routes.jsx'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import vegReducer from './data/features/vegetableSlice.js'

const router = createHashRouter(routes)

const store = configureStore({
	reducer: {
		vegetables: vegReducer
	}
})

// RouterProvider måste finnas högst i hierarkin, annars fungerar inte routing alls.
createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>,
)
