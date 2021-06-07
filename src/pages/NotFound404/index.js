import React from 'react'
import { NotFound404Link, NotFound404H1, NotFound404Containers } from './NotFound404.style'

function NotFound404() {
	return (
		<NotFound404Containers>
			<NotFound404H1>Not Found 404 Error</NotFound404H1>
			<NotFound404Link to='/'>Back To Home Page</NotFound404Link>
		</NotFound404Containers>
	)
}

export default NotFound404;